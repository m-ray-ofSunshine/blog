const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize({
    'host': 'us-cdbr-east-04.cleardb.com',
    'username': 'bed2f77e2a6c44',
    'password': '39bc517d',
    'database': 'heroku_fa4762c4c0c1c50',
    'dialect': 'mysql',

  });
}

module.exports = sequelize;