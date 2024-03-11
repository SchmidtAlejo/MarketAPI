const fs = require('fs');
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DATABASE,
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DATABASE,
    host: process.env.PROD_HOST,
    port: process.env.PROD_PORT,
    url: process.env.PROD_URL,
    dialect: 'postgres',
  }
};