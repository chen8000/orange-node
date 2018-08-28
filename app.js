
const Koa  = require('koa')
const app = new Koa()
const router = require('koa-router')()
const cors = require('koa2-cors')
const jsonp = require('koa-jsonp')


// 子组件
const api = require('./route/api')


// 返回jsonp格式
app.use(jsonp())
// 后台允许跨域
app.use(cors())



// 加载api组件
router.use('/api', api)


//启动路由
app
    .use(router.routes()) // 启动路由
    .use(router.allowedMethods()) //  根据上下文环境配置 response 响应头
app.listen(8000)






