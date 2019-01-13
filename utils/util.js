const api = require('./api');

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

// request param format
function paramObjToStr(obj) {
  let paramStr = '';
  for (let key in obj) {
    paramStr = paramStr + key + '=' + obj[key] + '&';
  }
  paramStr = paramStr.slice(0, paramStr.lastIndexOf('&'));
  return paramStr;
}
// request template
function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    let paraStr = paramObjToStr(data);
    wx.request({
      url: url + (paraStr ? ('?' + paraStr) : ''),
      data: data,
      method: "GET",
      header: {
        'Content-Type': 'application.json'
      },
      success: function (res) {
        console.log("request successd");
        resolve(res);
      },
      fail: function (err) {
        reject(err);
        console.log("request falied");
      },
      complete: function () { }
    })
  })
}


// request url image
function requestTest() {
  return new Promise((resolve, reject) => {
    request(api.Test, {
    }, 'GET')
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err);
      })
  })
}

function requestTestJson(){
  return new Promise((resolve,reject) => {
    request(api.TestJson, {
    }, 'GET')
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err);
    })
  })
}

module.exports = {
  requestTest,
  requestTestJson
}
