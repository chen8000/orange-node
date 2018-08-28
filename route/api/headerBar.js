
const router = require('koa-router')()
const DB = require('../../module/mongodb/db')

router.get('/', async ctx => {

    let result = await DB.find('headerBar' ,[{}])

    ctx.body = result
})

module.exports = router.routes()








