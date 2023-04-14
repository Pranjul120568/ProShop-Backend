import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const generateToken = (id) => {
  //first argument is the payload which is an object and will be the user id
  //the second argument is the secret which will libe in our .env
  //the third argument is options
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
