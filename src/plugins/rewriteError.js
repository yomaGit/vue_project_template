import { postError } from '../ajax'

let rewriteError = () => {

  let oldError = console.error;
  let isConsole = false;

  // 重写console.error方法
  console.error = function () {
    let args = arguments;
    let errorMsg = args[0] && args[0].message;
    let lineNumber = 0;
    let errorColumnNumber = 0;
    let errorObj = args[0] && args[0].stack;
    if (!errorObj) errorObj = args[0];
    !isConsole && errRecord(errorMsg, lineNumber, errorColumnNumber, errorObj);
    return oldError.apply(console, args);
  }

// 重写window.onerror
  window.onerror = function (errorMsg, url, lineNumber, errorColumnNumber, errorObj) {
    isConsole = true;
    let stack = errorObj ? errorObj.stack : null;
    errRecord(errorMsg, lineNumber, errorColumnNumber, stack);
  }

  function errRecord(errorMsg, lineNumber, errorColumnNumber, stack) {

    let errorObj = {
      errorMsg,
      lineNumber,
      errorColumnNumber,
      stack,
    }

    postError(errorObj,'window')
  }

}

export default rewriteError
