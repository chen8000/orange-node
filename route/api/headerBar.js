
const router = require('koa-router')()
const DB = require('../../module/mongodb/db')


// 查询
router.get('/', async ctx => {

    // 查询headerbar数据 返回给前端
    let result = await DB.find('headerBar' ,[{}])

    ctx.body = result
})



module.exports = router.routes()








