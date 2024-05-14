
const express = require("express");
const { login, register } = require("../controllers/user");
const CustomApiError = require("../ERROR/CustomApiError");

const user_routes = express.Router();

user_routes.post('/login', login);
user_routes.post('/register', register);

// Error handling middleware
user_routes.use((err, req, res, next) => {
    console.error(err.stack);
    // res.status(500).send('Something broke!');
    next(new CustomApiError(err.message,500)); //Correct way to hndle error


});

module.exports = user_routes;
