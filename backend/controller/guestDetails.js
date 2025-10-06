const guestDetailsModel = require('../models/guestDetailsModel');
const guestDetails = async(req,res)=>{
    try{
        const data = req.body;
        const newDetails = new guestDetailsModel(data);
        await newDetails.save();
        res.status(201).json({ success: true, message: "Guest details saved" });

    }catch(err){
      res.status(500).json({
      success: false,
      message: err.message
    });  
    }
}

module.exports = {guestDetails};
