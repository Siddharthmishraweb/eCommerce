import jwt from "jsonwebtoken";
import NodeCache from "node-cache";
const tokenCache = new NodeCache();
import dotenv from "dotenv";

dotenv.config();


const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie('cookieName', 'cookieValue');
  tokenCache.set("userId", token);

  process.env.BEARER_TOKEN = token;

  // Set JWT as an HTTP cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Set secure flag based on environment
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });

  console.log("Token is:", token);

  // Send a response if needed
  //res.status(200).json({ message: "JWT token set successfully", token });
};

export default generateToken;
