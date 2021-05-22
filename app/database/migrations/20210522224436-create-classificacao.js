'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('classificacao', { 

      id: { 
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false 
      },
      like:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false
      },
      created_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull:false
      },
      questao_id:{
        type:Sequelize.DataTypes.BIGINT,
        references:{
          model:{
            tableName:'questao'
          },
          key:'id'
        }
      }
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('classificacao');
  }
};
