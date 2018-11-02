import axios from 'axios'
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return error;
})
import Qs from 'qs'
import {postError} from '../ajax'

export default async (url = '', data = {}, type = 'POST') => {

  try{
    let res=await axiosFun()
    return res ? res : false;
  }catch (e) {
    postError('async',e)
    return false;
  }

  async function axiosFun() {
    let args = {
      params: data
    }

    if (type == 'POST' || type == 'post') {
      let data_v;
      if (data.formdata) {
        data_v = data;
      } else {
        data_v = Qs.stringify(data);
      }
      args = {
        data: data_v
      }
    }

    let res = await axios(Object.assign(args, {
        url: url,
        method: type,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      })
    )

    //- axios返回数据的status为200 正常
    return res.status === 200 ? res.data : false;

  }

}
