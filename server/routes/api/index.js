const router = require("express").Router(); //Importing the built-in routing functionality from the express module

const orderRoutes = require("./orderRoutes"); // Importing the order route

const orderDetailsRoutes = require("./orderDetailsRoutes"); // Importing the order details route

router.use("/orders", orderRoutes); //Custom middleware using the router functionality asking the application to serve the file orderRoute when that route is reached

router.use("/order-details", orderDetailsRoutes); //Custom middleware using the router functionality asking the application to serve the file orderDetailsRoute when that route is reached

module.exports = router;