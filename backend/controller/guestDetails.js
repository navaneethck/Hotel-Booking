const guestDetailsModel = require('../models/guestDetailsModel');
const guestDetails = async(req,res)=>{
    try{
        const{ firstName, lastName, email, phone, specialRequest } = req.body;
        const cleanData = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.replace(/\D/g, ""), 
        specialRequest: specialRequest?.trim(),
      };
        const newDetails = new guestDetailsModel(cleanData);
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
