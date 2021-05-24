const { Model, DataTypes } = require('sequelize')

class Questao extends Model{
    static init(connection){
        super.init({
            descricao:DataTypes.STRING,
            ativo:DataTypes.INTEGER,
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
module.exports = Questao