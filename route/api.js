
const router = require('koa-router')()


// 自组件
const headerBar = require('./api/headerBar')



// 导向
router.use('/headerBar', headerBar)


module.exports = router.routes()



