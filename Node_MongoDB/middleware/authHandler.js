const jwt = require("jsonwebtoken");
const CustomApiError = require("../ERROR/CustomApiError");

const authMiddleWare = async (req, res, next) => {
  const authHeader = req.header.authorization;
  console.log(authHeader);

  if (!authHeader || authHeader.startsWith("Bearer ")) {
    next(new CustomApiError("Not Authorized", 401));
  }

  try {
    const token = authHeader.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.JSON_SECRETKEY);

    const { email, username, role } = decoded;
    req.user = { email, username, role };
    next();
  } catch (err) {
    console.log(err);
    next(new CustomApiError ("Not a valid token", 401));
  }
};

module.exports = authMiddleWare;