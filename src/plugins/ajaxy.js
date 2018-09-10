let Ajaxy = {};
Ajaxy.install = function (Vue, options) {
  Vue.prototype.$Ajaxy = (type, url, data, suc, err, other) => {

    let v = new Vue();
    let args = {
      url: url,
      method: type,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }

    if (type == 'POST' || type == 'post') {
      let data_v;
      if (other == 'formdata' || other == 'file') {
        data_v = data;
      } else {
        data_v = v.$qs.stringify(data);
      }
      args.data = data_v;
    } else {
      args.params = data;
    }

    v.$axios(args).then(function (da) {

      if (da.status == 200) {
        let d = da.data;

        suc(d);

      } else {
        err()

        v.$catchRecord({
          type: 'axios',
          name: 'status!=200',
          msg: JSON.stringify(da)
        })

      }

    }).catch(function (e) {

      console.log(e);
      err()

      v.$catchRecord({
        type: 'catch',
        name: e.name,
        msg: e.message
      })

    })

  }
}
export default Ajaxy;
