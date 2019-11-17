const Koa = require('koa')
const app = new Koa()

const json = require('koa-json')

const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const start = require('./bli/www')
const index = require('./routes/index')

const mongoose = require('mongoose')
const session = require('koa-generic-session')
const Redis = require('koa-redis')

const dbConfig = require('./dbs/config')

// 一些session和redis相关配置
app.keys = ['keys', 'keyskeys']
app.proxy = true
app.use(
  session({ 
    store: new Redis()
  })
)

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())

// 连接数据库
mongoose.connect(
  dbConfig.dbs,
  { useNewUrlParser: true }
)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const db = mongoose.connection
mongoose.Promise = global.Promise // 防止Mongoose: mpromise 错误

db.on('error', function () {
    console.log('数据库连接出错')
})

db.on('open', function () {
    console.log('数据库连接成功')
})

app.use(logger())

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

start(app)
