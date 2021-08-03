const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize({
    HOST: 'us-cdbr-east-04.cleardb.com',
    USER: 'bed2f77e2a6c44',
    PASSWORD: '39bc517d',
    DB: 'heroku_fa4762c4c0c1c50'
    // {
    //   host: 'localhost',
    //   dialect: 'mysql',
    //   port: 3306
    // },
  });
}

module.exports = sequelize;