let catchRecord = {};
catchRecord.install = function (Vue, options) {
  Vue.prototype.$catchRecord = (errmsg) => {

    let v = new Vue();
    let args = {
      url: '',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }

    let formdata = {
      test:''
    }

    args.data = v.$qs.stringify(formdata);
    v.$axios(args).then(function () {
      console.log("record ok");
    }).catch(function (e) {
      console.log(e);
    })
    console.log(errmsg);

  }
}
export default catchRecord;
