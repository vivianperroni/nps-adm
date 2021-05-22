const { Model, DataTypes } = require('sequelize')
const connection = require('../database/connection')

class Nps extends Model{
    static init(connection){
        super.init({
            pontuacao:DataTypes.INTEGER,
            created_at:DataTypes.DATE,
            updated_at:DataTypes.DATE
        },
        {
            sequelize:connection,
            tableName:'nps',
        }
        )
    }
}

Nps.init(connection)
module.exports = Nps