const Sequelize = require('sequelize')
const databaseConfig = require('../config/database') /* importação do arquivo da pasta 
config que possui as configuraçõe de acesso
*/

const connection = new Sequelize(databaseConfig)

module.exports = connection

// testing the connection 
testConnection = async function(){
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error); 
    }
}
testConnection() /* utilize apenas para testar, quando for fazer o commit no 
repositório, remova a chamada da função
 */