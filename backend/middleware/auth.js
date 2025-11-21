const jwt = require('jsonwebtoken');
const User= require('../models/userModel');
require('dotenv').config(); 


//checking for if the user is authenticated or not

// const auth= async(req,res,next)=>{
//     try{
//         // const token =req.header('Authorization')?.replace('Bearer ','');
//         const token = req.cookies.token;
//         console.log(`requested token from cookie  ${token}`)
//         if(!token){
//             return res.status(401).json({message:"No token,access denied"});
//         }
    
//         const decoded= jwt.verify(token,process.env.JWT_SECRET);

//         //checking the user
//         const user = User.findById(decoded.id);
//         if(!user){
//             return res.status((401).json({ message: 'User no longer exists' }));
//         }
        
//         req.user=user;

//         next()

//     }catch(error){
//         res.status(401).json({message:"Token is not valid"})
//     }
// }


const auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "No token, access denied" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // FIX 1: Use decoded.userId
        const user = await User.findById(decoded.userId).select('-password');

        // FIX 2: Check actual user
        if (!user) {
            return res.status(401).json({ message: "User no longer exists" });
        }

        // FIX 3: Attach user info properly
        req.user = {
            id: user._id,
            role: user.role,
            name: user.name,
            email: user.email
        };

        next();

    } catch (error) {
        res.status(401).json({ message: "Token is not valid" });
    }
};

//checking for if the admin is authenticated or not

const adminAuth = async(req,res,next)=>{
    try{
       const token = req.header('Authorization')?.replace('Bearer ', '');
        if(!token){
            return res.status(401).json({message:"No token,access denied"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded.role !== 'admin'){
            return res.status(403).json({message:'Admin access required'})
        }

        req.user=decoded;
        next();

    }catch(error){
            console.error('the jwt error:',error)
            res.status(401).json({ message: 'Token is not valid' });
          
    }
}

module.exports= {auth,adminAuth};
