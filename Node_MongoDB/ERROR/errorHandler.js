const CustomApiError = require('./CustomApiError');

const errorHandler = (err,req,res,next) =>{
//differnt error types - if error types ois customApiError\
//it constains statusCode and message
if(err instanceof CustomApiError)
res.status(err.statusCode).json({msg:err.message});
else  res.status(500).json({msg:err.message});
};

module.exports = errorHandler;