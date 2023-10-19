const jwt = require("jsonwebtoken");
require('dotenv').config();
const response = require('../src/response/response')

class TokenMiddleware {
  async decodeToken(req, res, next) {
    try {
      const token = req.header("Authorization").replace("Bearer ", "");
      const user = jwt.verify(token, process.env.CLAVETOKEN);
      req.id = user.id;
      return next();
    } catch (error) {
      response.error(res, 'invalid token', 401);
    }
  }
}

module.exports = new TokenMiddleware();