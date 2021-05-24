const Sequelize = require('sequelize')
const databaseConfig = require('../config/database') /* importação do arquivo da pasta 
config que possui as configuraçõe de acesso
*/

const connection = new Sequelize(databaseConfig)

module.exports = connection
