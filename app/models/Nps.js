const { Model, DataTypes } = require('sequelize')
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

module.exports = Nps