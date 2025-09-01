const express = require('express');
const Hotel = require('../models/hotelModel');
const TrendingLocation = require('../models/trendingLocation');
const {auth,adminAuth} = require('../middleware/auth');
const router=express.Router();
const {uploadHotel,uploadTrendingLocation}= require('../config/multer');

//ading new hotel admin side
router.post('/Add-Hotel',adminAuth,uploadHotel.array('images',10),async (req,res)=>{
    try{
        const {name, location, description, price, amenities,rooms,rating,address,contact,availability,roomTypes, bookingPolicy }=req.body;
        const imageUrls = req.files.map((file)=>file.path);

        const hotel= new Hotel({name, location, description, images:imageUrls, price, amenities,rooms,rating,address,contact,availability,roomTypes, bookingPolicy })

        await hotel.save();
        res.status(201).json({hotel,message:"successfully added"})
    }catch(error){
        res.status(500).json({ message: error.message });
    }
})

//for the trending location 
router.post('/add-trendingLocation',uploadTrendingLocation.single('image'),async (req,res)=>{
    try{
        const {name}=req.body;
        const imageUrl = req.file.path;

        const newLocation = new TrendingLocation({
            name,
            images:[imageUrl]
        })

        await newLocation.save();
        res.status(200).json({
            newLocation,
            message:'successfuly trending location added'
        })

    }catch(error){
         res.status(500).json({ message: error.message });
    }
})
//to get all hotel
router.get('/All-Hotel',auth,async (req,res)=>{
    try{
        const hotels= await Hotel.find();
        res.json(hotels)

    }catch(error){
        res.status(500).json({ message: error.message });

    }
})

router.get('/search/:location',auth,async (req,res)=>{
    try{
        const {location}=req.params;
        const {minPrice,maxPrice}=req.query;

        const queryHotel = {location:{$regex:location,$options:'i'}}
      

        if(minPrice || maxPrice){  
            queryHotel.price={};

            if(minPrice){
                queryHotel.price.$gte=Number(minPrice)
            }else if(maxPrice){
                 queryHotel.price.$lte=Number(maxPrice)
            }
        }

        const query=await Hotel.aggregate([{$match:queryHotel}]);

        res.json(query);

    }catch(error){
         res.status(500).json({ message: error.message });

    }
})

//update hotel(admin)
router.put('/:id',adminAuth,async (req,res)=>{
    try{
        const hotel= await Hotel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        
        if(!hotel){
            return res.status(404).json({message:'Hotel not found'})
        }

        res.json(hotel)

    }catch(error){
    res.status(500).json({ message: error.message });
    }
})

//delete hotel(admin)
router.delete('/:id',adminAuth,async (req,res)=>{
    try{

        const hotel=await Hotel.findByIdAndDelete(req.params.id);
        if(!hotel){
            res.status(404).json({message:'Hotle not found'});
        }

        res.json({ message: 'Hotel deleted successfully' });
    }catch(error){
        res.status(500).json({ message: error.message });
    }

})

module.exports = router;