import axios from '../plugins/async'

/**
 * 地址环境配置
 * 默认为正式环境地址
 * 测试环境另行配置
 */
let url = ''
if (process.env.NODE_ENV == 'development') {

  url = ''

}

/**
 * 发送错误报告
 * @param errorType 报错类型 normal | window
 * @param error 报错对象
 */

export const postError = (error, errorType = 'normal') => {
  let errorUrl = location.href;
  let paramsObj = {
    projectName: 'myproject',
    errorType,
    errorUrl,
    errorMsg: errorType == 'window' ? error.errorMsg : `${error.name} : ${error.message}`,
    errorLineNumber: error.lineNumber,
    errorColumnNumber: errorType == 'window' ? error.errorColumnNumber : 0,
    errorStack: error.stack,
    errorOther: error.errorOther ? error.errorOther : '',

  }

  console.log(`%cerrorRecord监听到了error，
                  errorType: ${paramsObj.errorType} 
                  errorUrl: ${paramsObj.errorUrl}
                  errorMsg: ${paramsObj.errorMsg} 
                  errorLineNumber: ${paramsObj.errorLineNumber} 
                  errorColumnNumber: ${paramsObj.errorColumnNumber} 
                  errorStack: ${paramsObj.errorStack}
                  errorOther: ${JSON.stringify(paramsObj.errorOther)}
                  }`,
    'color:blue');

  if (process.env.NODE_ENV == 'production') {
    // 发送错误报告，javascript实现，不用async避免循环调用
    let xhr = new XMLHttpRequest(), postErrorUrl = url + 'postError';
    xhr.open("POST", postErrorUrl, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        console.log('错误报告发送成功');
      }
    }
    xhr.send(Qs.stringify(paramsObj));
  }

}

/**
 * 获取省市下级地址的具体值
 * @param {parentid 父级id}
 */
export const getAttrList = (parentid = '') => {
  let data = {
    parentid
  }
  return axios(url + '/area/queryarea', data);
}

