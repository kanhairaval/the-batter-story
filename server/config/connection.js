const { Sequelize } = require("sequelize"); // Importing sequelize module
require('dotenv').config(); // Importing dotenv library to sync environment variables

// Logging the environment variables to ensure they are loaded correctly
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);

// Creating a new Sequelize instance and establishing a connection with the database
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT || 3306, // Default to 3306 if DB_PORT is not specified
        logging: console.log // Enable logging for debugging purposes
    }
);

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;