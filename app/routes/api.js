const { Router } = require('express')
const NpsController = require('../controllers/api/NpsController')
const routerApi = Router()

routerApi.post('/api/nps/register',NpsController.register)

module.exports = routerApi