const express = require('express');
const bcrypt = require('bcryptjs');
const User= require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config(); 

const router = express.Router();

router.post('/register', async (req,res)=>{
    try{
        const {name,email,password,role} = req.body;

        const checkExistingUser = await User.findOne({email});
        if(checkExistingUser){
            return res.status(400).json({message:"user already exists"})
        }
        const alowedRoles=['user','admin'];
        const userRole = alowedRoles.includes(role)?role:'user';
        const hashed = await bcrypt.hash(password,10);
        const user = new User ({name,email,password:hashed,role: userRole});

        await user.save();

        res.status(201).json({message:" Registered Successfully"})

    }catch(error){
        res.status(500).json({message:error.message})

    }
})

router.post('/login',async (req,res)=>{
   try{
     const {email,password}=req.body;
     const user= await User.findOne({email});
     if(!user){
        return res.status(400).json({message:"user not found"})
     }
     const checkMatch = await bcrypt.compare(password,user.password);
     if(!checkMatch){
        return res.status(400).json({message:'invalid password'});
     }
     const token =jwt.sign({
        userId:user._id,
        role: user.role
     },
    process.env.JWT_SECRET,
    {expiresIn:'1d'}
);
//in production
    res.cookie("token", token, {
    httpOnly: true,         
    secure: process.env.NODE_ENV === "production", 
    sameSite: "None",       
    maxAge: 24 * 60 * 60 * 1000 
    });

//in local
//     res.cookie("token", token, {
//   httpOnly: true,         // JS cannot access the cookie
//   secure: false,          // set true in production (HTTPS)
//   sameSite: "Lax",        // for cross-site requests
//   maxAge: 24*60*60*1000
// });

    res.json({
        message: "Login successful",
        user:{ id: user._id,
              name: user.name,
              email: user.email,
              role: user.role}
    })

   }catch(error){
    res.status(500).json({message:error.message});

   }
   
})
router.post('/logout',async(req,res)=>{
    res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });

    res.json({ message: "Logged out successfully" });
})

router.get('/me',async(req,res)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message:'Not Authenticated'})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log('decoded token',decoded)
        const user = await User.findById(decoded.userId).select('-password');
        // console.log(user)

        if(!user)return res.status(404).json({ message: "User not found" });

        res.json({user});
        
    }catch(error) {
        console.error("Error in /me route:", error.message);
         res.status(401).json({ message: "Invalid token" });
    }
})

module.exports = router;