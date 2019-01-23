const Router = require('koa-router')
const router = new Router()
const Test = require('mongoose').model('Test')

module.exports = app=>{
  router.get('/',async(ctx,next)=>{
     const list = await Test.find({}).exec()
     ctx.body =list
  })
  app.use(router.routes()).use(router.allowedMethods());
}
