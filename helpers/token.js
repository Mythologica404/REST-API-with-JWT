import jwt from "jsonwebtoken";
import { JWT_Secret } from "../config/config.js";

const generateToken = (payload) => {
  const token = jwt.sign(payload, JWT_Secret);
  return token;
};

const verifyToken = (token) => {
  const decode = jwt.verify(token, JWT_Secret);
  return decode;
};

export { generateToken, verifyToken };
