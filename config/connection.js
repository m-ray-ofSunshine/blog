const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize({
    HOST: 'us-cdbr-east-04.cleardb.com/',
    USER: 'b5de89ee88d2f3',
    PASSWORD: '874fe6d5',
    DB: 'heroku_085dfc1bdc2d857'
    // {
    //   host: 'localhost',
    //   dialect: 'mysql',
    //   port: 3306
    // },
  });
}

module.exports = sequelize;