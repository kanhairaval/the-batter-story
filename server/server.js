//sic parvis magna
const express = require("express"); //Importing the express module to set up the server

const path = require("path");

const cors = require("cors");

const sequelize = require("./config/connection"); //Importing connection file to establish connection between the server & the database

const api = require("./routes/api/index"); //Importing the index.js file file from the routes folder

require("dotenv").config(); //Importing dotenv file/library to sync environment varibales

const app = express(); //Creating a new instance of the express module and saving it in the app variable

const PORT = process.env.PORT || 3001; //Declaring port varibale and assigning value of local port or custom port if availbale in .env file

app.use(express.json()); //Middleware so that incoming request are parsed in json format
app.use(express.urlencoded({ extended: true })); //Middleware so that information coming from the url/html forms is parsed in json format

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST'], // Allow GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow Content-Type header
}));

console.log("server.js: Setting up routes");
app.use("/api", api); //Custom middleware telling the server to use the index file from the routes folder once server has started

//Syncing the database with the server, asking sequelize not to drop and create new models every time the server starts and asking the server to start and for the app to listen on PORT varibale
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on Port: ${PORT}`));
});