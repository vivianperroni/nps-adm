const { Model, DataTypes } = require('sequelize')
const connection = require('../database/connection')

class Questao extends Model{
    static init(connection){
        super.init({
            descricao:DataTypes.STRING,
            ativo:DataTypes.TINYINT,
            created_at:DataTypes.DATE,
            updated_at:DataTypes.DATE
        },
        {
            sequelize:connection,
            tableName:'questao',
        }
        )
    }
}

Questao.init(connection)
module.exports = Questao