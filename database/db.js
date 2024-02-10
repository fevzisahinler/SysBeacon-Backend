const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    logging: false, 
  }
);

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB Connection is correct');

    const tables = await sequelize.getQueryInterface().showAllTables();
    if (!tables.includes('users')) { 
      console.log('Required tables not found, database will be synchronized.');
      await sequelize.sync();
      console.log('Database synchronization is complete. API ready for use.');
  
    } else {
      console.log('The required tables already exist.');
    }
  } catch (error) {
    console.error('An error occurred during the database operation:', error);
  }
};

initDb();

module.exports = { sequelize };
