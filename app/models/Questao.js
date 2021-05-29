const { Model, DataTypes } = require('sequelize')

class Questao extends Model{
    static init(connection){
        super.init({
            descricao:DataTypes.STRING,
            ativo:DataTypes.TINYINT
        },
        {
            sequelize:connection,
            tableName:'questao',
        }
        )
    }
}
module.exports = Questao