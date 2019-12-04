const multer = require('koa-multer')//加载koa-multer模块
const path = require('path')
//文件上传
//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    console.log(path.join(__dirname,'../public/uploads/'))
    cb(null, path.join(__dirname,'../public/uploads/'))
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})

module.exports = multer({ storage: storage })
