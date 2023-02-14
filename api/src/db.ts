require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;

const { Sequelize, DataTypes } = require('sequelize');




const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/championfit `,
    {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    }
  );

  




  module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  };
  