const router = require("express").Router(); //Importing the built-in routing functionality from the express module

const apiRoutes = require("./api/index"); //Importing the index file from the api folder

router.use("/api", apiRoutes); //Custom middleware using the router functionality to tell the application to use the index file from the api folder when the /api route is requested

module.exports = router;