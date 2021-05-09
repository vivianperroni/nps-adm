'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
   await queryInterface.createTable('usuario', { 

    id: { 
      type:Sequelize.DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false 
    },
    nome:{
      type:Sequelize.DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:Sequelize.DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    senha:{
      type:Sequelize.DataTypes.STRING,
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
   
     await queryInterface.dropTable('usuario');
 
  }
};