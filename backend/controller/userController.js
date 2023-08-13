import asyncHandler from "../middleware/asyncHandler.js";
import { errorHandler } from "../middleware/errorMiddleware.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;
   // check whether user exist in database or not
   const user = await User.findOne({email: email});
   console.log(user.password)
   if(user && await user.matchPassword(password)){
      generateToken(res, user._id)
      res.status(200).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         password: user.password,
         isAdmin: user.isAdmin

      })
   }else{
      res.status(401);
      throw new Error('Invalid Email or Password');
   }
})

// @desc registerUser
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
   const { name, email, password } = req.body;
   console.log("reg details: ", name, " , ", email,", ", password)
   const userExist = await User.findOne({email});
   if(userExist){
      res.status(400);
      throw new Error('User already exist');
   }
   const user = await User.create({
      name,
      email,
      password
   })
   if(user){
      generateToken(res, user._id);

      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         password: user.password,
         isAdmin: user.isAdmin
      })
   }else{
      res.status(400)
      throw new Error('Invalid user data');
   }
})


// @desc logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
   // remove cookie or delete cookie
   //res.cookies('cookie_name',set it to empty, and expire it in 0 (instantly))
   res.cookie('jwt','',{
      httpOnly: true,
      expiresIn: new Date(0)
   });
   res.status(200).json({'message': 'User logged out successfully'});
   // res.send('LogOut User')
})


// @desc  get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
   // since we are loggin in then only we can perform this opr do er have access of req.user
   const user = await User.findById(req.user._id);
   if(user){
      res.status(201).json({
         name: user.name,
         email: user.email,
         password: user.password,
         isAdmin: user.isAdmin
      })
   }else{
      res.status(404)
      throw new Error('User not found')
   }

})

// @desc  Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id).exec();
   if(user){
     user.name = await req.body.name || user.name ;
     user.email = await req.body.email || user.email ;
     // doing this way because password is
     if(req.body.password){
      user.password = req.body.password;
     }
     const updatedUser = await user.save();
     res.status(200).json(
        updatedUser
     )
   }else{
      res.status(404);
      throw new Error('User not found')
   }

})

// @desc  get All Users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
   res.send('getUsers Users')
})


// @desc  get  User by id
// @route GET /api/users/:Id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
   res.send('Get User by id')
})

// @desc  delete User
// @route DELETE /api/users/:Id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
   res.send('Delete User')
})


// @desc  update User
// @route PUT /api/users/:Id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
   res.send('Update  User')
})

export {
   authUser,
   registerUser,
   logoutUser,
   getUserProfile,
   updateUserProfile,
   getUsers,
   getUserById,
   deleteUser,
   updateUser
}


