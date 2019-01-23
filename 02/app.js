const Koa = require('koa')
const { resolve } = require('path')

const database  = require('./middleware/database')
const router = require('./middleware/router')

const app = new Koa()
database(app)
router(app)

app.listen(3001)
console.log('服务器启动成功')
