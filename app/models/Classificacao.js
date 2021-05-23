const { Model, DataTypes } = require('sequelize')
const connection = require('../database/connection')

class Classificacao extends Model{
    static init(connection){
        super.init({
            like:DataTypes.TINYINT,
            created_at:DataTypes.DATE,
            updated_at:DataTypes.DATE,
            questao_id:DataTypes.BIGINT
        },
        {
            sequelize:connection,
            tableName:'classificacao',
        }
        )
    }
}

Classificacao.init(connection)
module.exports = Classificacao