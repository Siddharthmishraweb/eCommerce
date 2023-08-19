import jwt from 'jsonwebtoken';
// import asyncHandler from './asyncHandler';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

const protect = asyncHandler( async(req, res, next) => {
   // read the jwt from cookie
   const token = req.cookies.jwt || process.env.BEARER_TOKEN;
   if(token){
     try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decode.userId).select('-password');
      console.log(decode);
      next();

     } catch (error) {
      console.log(error)
      res.status(401).json({'Message': `Unautorised with error: ${error}`})
     }
   }else{
      res.status(401).json({'Message': 'Unautorised'})
   }
});


// admin middleware
const admin = (req, res, next) => {
   if(req.user && req.user.isAdmin){
      next();
   }else{
      res.status(401).json({'messgae:': 'Not uthorised as admin'})
      // throw new Error('Not authorised as admin')
   }

}

export { protect, admin };