const { Model, DataTypes } = require('sequelize')

class Classificacao extends Model{
    static init(connection){
        super.init({
            like:DataTypes.INTEGER,
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
module.exports = Classificacao