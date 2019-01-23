const fs = require('fs')
const { resolve } = require('path')
const mongoose = require('mongoose')
const config = require('../config')

const models = resolve(__dirname,'../database')

fs.readdirSync(models)
.filter(file=> ~file.search(/\.js$/))
.forEach(file=>require(resolve(models,file)))

module.exports = app=>{
  mongoose.set('debug',true)

  mongoose.connect(config.db,{useNewUrlParser:true})

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.db)
  })

  mongoose.connection.on('error', err => {
    console.log(err);
  })

  mongoose.connection.on('open',async()=>{
     console.log('Connected to MongoDb', config.db)

     const Test = mongoose.model('Test')

     const count = await Test.count().exec()

     if (count<2) {
        let test = new Test({
          test: '测试'
        })
        await test.save()
     }
     console.log('初始化项目成功');
  })
}