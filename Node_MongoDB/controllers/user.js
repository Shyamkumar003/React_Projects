const CustomApiError = require("../ERROR/CustomApiError");
const User = require("../models/user"); 
const jwt = require('jsonwebtoken');

const register = async (req, res,next) => {
    try {
        req.body.role = 'user';
        const newUser = await User.create(req.body); 
        res.status(200).json(newUser); 
    } catch (error) {
        // console.log(error);
        // res.status(500).json(error);
        next(new CustomApiError(error.message,500)); //Correct way to hndle error
    }
};

const login = async (req, res,next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email, password: password });

        if (!user) return res.status(401).json({ msg: "Invalid credentials" }); // Changed error message
        else {
            //GENERATE json web token
            const { email, username, role } = user; // Corrected variable name
            const token = jwt.sign({ email, username, role }, process.env.JSON_SECRETKEY, { expiresIn: '1800s' }); // Corrected typo in secret key
            res.status(200).json({ user, token }); // Return user and token
        }
    } catch (error) {
        // console.log(error);
        // res.status(500).json(error);
        next(new CustomApiError(error.message,500));  //Correct way to hndle error

    }
};

module.exports = { login, register };
