const { Model, DataTypes } = require('sequelize')
const connection = require('../database/connection')

class Usuario extends Model{
    static init(connection){
        super.init({
            nome:DataTypes.STRING,
            email:DataTypes.STRING,
            senha:DataTypes.STRING
        },
        {
            sequelize:connection,
            tableName:'usuario',
        }
        )
    }
}

Usuario.init(connection)
module.exports = Usuario