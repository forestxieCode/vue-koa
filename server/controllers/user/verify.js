const Redis = require('koa-redis') // key-value存储系统, 存储用户名，验证每个用户名对应的验证码是否正确
const nodeMailer = require('nodemailer') // 通过node发送邮件
const Email = require('../../dbs/config')
// 获取redis的客户端
const Store = new Redis().client
// 发送验证码 的接口
module.exports = async (ctx,next) =>{
    const username = ctx.request.body.username
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire') // 拿到过期时间
  
    console.log(ctx.request.body)
    console.log('当前时间:', new Date().getTime())
    console.log('过期时间：', saveExpire)
  
    // 检验已存在的验证码是否过期，以限制用户频繁发送验证码
    if (saveExpire && new Date().getTime() - saveExpire < 0) {
      ctx.body = {
        code: -1,
        msg: '发送过于频繁，请稍后再试'
      }
      return
    }
  
    // QQ邮箱smtp服务权限校验
    const transporter = nodeMailer.createTransport({
      /**
       *  端口465和587用于电子邮件客户端到电子邮件服务器通信 - 发送电子邮件。
       *  端口465用于smtps SSL加密在任何SMTP级别通信之前自动启动。
       *  端口587用于msa
       */
      host: Email.smtp.host,
      port: 587,
      secure: false, // 为true时监听465端口，为false时监听其他端口
      auth: {
        user: Email.smtp.user,
        pass: Email.smtp.pass
      }
    })
    
    console.log('info:',ctx.request.body.email,ctx.request.body.username)
    // 邮箱需要接收的信息
    const ko = {
      code: Email.smtp.code(),
      expire: Email.smtp.expire(),
      email: ctx.request.body.email,
      user: ctx.request.body.username
    }
  
    // 邮件中需要显示的内容
    const mailOptions = {
      from: `"认证邮件" <${Email.smtp.user}>`, // 邮件来自
      to: ko.email, // 邮件发往
      subject: '邀请码', // 邮件主题 标题
      html: `您正在注册****，您的邀请码是${ko.code}` // 邮件内容
    }
  
    // 执行发送邮件
    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log('error')
      } else {
        Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
      }
    })
  
    ctx.body = {
      code: 0,
      msg: '验证码已发送，请注意查收，可能会有延时，有效期5分钟'
    }
}

  