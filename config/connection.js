const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      // host: 'localhost',
      // user: 'root',
      // password: '123456',
      dialect: 'mysql',
      dialectOptions: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: 3306
      }
      
    }
  );
}

module.exports = sequelize;