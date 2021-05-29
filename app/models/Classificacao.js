const { Model, DataTypes } = require('sequelize')

class Classificacao extends Model{
    static init(connection){
        super.init({
            like:DataTypes.TINYINT
        },
        {
            sequelize:connection,
            tableName:'classificacao',
        }
        )
    }
}
module.exports = Classificacao