import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'

// @desc auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body;
   // check whether user exist in database or not
   const user = await User.findOne({email: email});
   console.log(user.password)
   if(user && await user.matchPassword(password)){
      const token = jwt.sign({ userId : user._id }, process.env.JWT_SECRET, {
         expiresIn: '30d'
      } )

      // Set JWT as a http cookie
       res.cookie('jwt', token, {
         httpOnly: true,
         secure: process.env.NODE_ENV !== 'development',
         sameSite : 'strict',
         maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
       })

      console.log("******888888___   token___     ",token)
      res.status(200).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         password: user.password,
         token: token
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
   res.send('Register User')
})


// @desc logout user / clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
   res.send('LogOut User')
})


// @desc  get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
   res.send('User Profile')
})

// @desc  Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
   res.send('Update User Profile')
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


