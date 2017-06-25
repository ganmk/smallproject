
var api = require('./api.js');
var utils = require('../utils/util.js');



/**
 * 网路请求
 */
function request(url, data, successCb, errorCb, completeCb) {
  console.log(url)
  wx.request({
    url: url,
    method: 'GET',
    data: data,
    success: function (res) {
      if (res.statusCode == 200) {
        utils.isFunction(successCb) && successCb(res.data);
      } else
        console.log('请求异常', res);
    },
    error: function () {
      utils.isFunction(errorCb) && errorCb();
    },
    complete: function () {
      utils.isFunction(completeCb) && completeCb();
    }
  });
}


function requestNews(tag, successCb, errorCb, completeCb)
{
  request(api.API_NEW, { "type": tag, "key": '6c1bb7ff2c9bd4ebb6b6cff5dae924e0' }, successCb, errorCb, completeCb)

}

module.exports = {
  requestNews: requestNews 
}