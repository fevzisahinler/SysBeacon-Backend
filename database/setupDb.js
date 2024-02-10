// db.js veya başka bir init dosyası

const { sequelize } = require('./db'); 

sequelize.sync({ force: false }) 
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch(error => {
    console.error("Error creating database & tables:", error);
  });
