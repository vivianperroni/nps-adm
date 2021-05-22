'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questao', { 

      id: { 
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false 
      },
      descricao:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      ativo:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        unique:true
      },
      created_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DataTypes.DATE,
        allowNull:false
      }
      
    });
  },

  down: async (queryInterface, Sequelize) => {
 
    await queryInterface.dropTable('questao');
  
  }
};
