'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nps', { 

      id: { 
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false 
      },
      pontuacao:{
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
      }
      
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('nps');

  }
};
