// import jwt from "jsonwebtoken";

// const generateToken = (res, userId) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });

//   console.log("token is**************", token);

//   // Set JWT as a http cookie
//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development",
//     sameSite: "strict",
//     maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
//   });
// };

// export default generateToken;




// import jwt from "jsonwebtoken";

// const generateToken = (res, userId) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });

//   console.log("token is**************", token);

//   // Set JWT as an HTTP cookie
//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development", // Adjust as needed
//     sameSite: "strict",
//     maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
//   });

//   // Log response headers
//   console.log("Response Headers:", res.getHeaders());
// };

// export default generateToken;



// import jwt from "jsonwebtoken";

// const generateToken = (res, userId) => {
//   const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
//     expiresIn: "30d",
//   });

//   res.cookie("cookie_name" , 'cookie_value', {expire : 24 * 60 * 60 * 1000 });

//   console.log("token is**************", token);
//   res.cookie("jwt", token);
//   //localStorage.setItem("jwt", token);

//   // Set JWT as an HTTP cookie
//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: false, // Set secure flag to false for development
//     sameSite: "strict",
//     maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
//   });

//   // Log response headers
//   console.log("Response Headers:", res.getHeaders());
// };

// export default generateToken;



import jwt from "jsonwebtoken";
import NodeCache from "node-cache";
const tokenCache = new NodeCache();


const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie('cookieName', 'cookieValue');
  tokenCache.set("userId", token);



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
