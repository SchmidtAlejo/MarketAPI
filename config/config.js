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
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        require: true,
      }
    },
    acquireConnectionTimeout: 5000,
    pool: {
      min: 0,
      max: 10,
      createTimeoutMillis: 8000,
      acquireTimeoutMillis: 8000,
      idleTimeoutMillis: 8000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 100,
    },
  }
};