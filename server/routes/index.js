const Router = require('express')
const router = new Router()
const clothesRouter = require('./clothesRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/clothes', clothesRouter)



module.exports = router