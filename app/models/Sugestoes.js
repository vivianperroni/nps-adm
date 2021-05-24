const { Model, DataTypes } = require('sequelize')

class Sugestoes extends Model{
    static init(connection){
        super.init({
            descricao:DataTypes.STRING,
            created_at:DataTypes.DATE,
            updated_at:DataTypes.DATE,
            nps_id:DataTypes.BIGINT
        },
        {
            sequelize:connection,
            tableName:'sugestoes',
        }
        )
    }
}

module.exports = Sugestoes