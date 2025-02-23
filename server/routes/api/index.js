const router = require("express").Router(); //Importing the built-in routing functionality from the express module

const orderRoute = require("./orderRoute"); // Importing the order route

const orderDetailsRoute = require("./orderDetailsRoute"); // Importing the order details route

const paymentsRoute = require("./paymentsRoute"); // Importing the payments route

router.use("/orders", orderRoute); //Custom middleware using the router functionality asking the application to serve the file orderRoute when that route is reached

router.use("/order-details", orderDetailsRoute); //Custom middleware using the router functionality asking the application to serve the file orderDetailsRoute when that route is reached

router.use("/payments", paymentsRoute); //Custom middleware using the router functionality asking the application to serve the file paymentRoute when that route is reached

module.exports = router;