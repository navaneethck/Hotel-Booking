const express = require('express');
const Hotel = require('../models/hotelModel');
const TrendingLocation = require('../models/trendingLocation');
const {auth,adminAuth} = require('../middleware/auth');
const router=express.Router();
const {uploadHotel,uploadTrendingLocation}= require('../config/multer');

// //ading new hotel admin side
router.post('/Add-Hotel', adminAuth, (req, res, next) => {
  uploadHotel.array('images', 10)(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    try {
      function trimStrings(obj) {
        if (typeof obj === 'string') return obj.trim();
        if (Array.isArray(obj)) return obj.map(trimStrings);
        if (typeof obj === 'object' && obj !== null) {
          const newObj = {};
          for (const key in obj) newObj[key] = trimStrings(obj[key]);
          return newObj;
        }
        return obj;
      }

      const cleanedBody = trimStrings(req.body);
      const imageUrls = req.files ? req.files.map(file => file.path) : [];

      const hotel = new Hotel({
        ...cleanedBody,
        availability: cleanedBody.availability === 'true',
        images: imageUrls,
        roomTypes: cleanedBody.roomTypes.map(r => ({
          name: r.name,
          price: Number(r.price),
          totalRooms: Number(r.totalRooms)
        }))
      });

      await hotel.save();
      res.status(201).json({ hotel, message: "successfully added" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});

//toGetTopratingHotels
router.get('/top-rated-hotels',async(req,res)=>{
    try{
        const topRatedHotels = await Hotel.find({rating:{$gte:4}}).sort({rating:-1}).limit(3);
        res.status(200).json(topRatedHotels)
    }catch(err){
        res.status(500).json({message:err.message})
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
//to get trending location 
router.get('/trending-location',async(req,res)=>{
    try{
        const location = await TrendingLocation.find();
        res.status(200).json(location);
    }catch(error){
        res.status(500).json({message:error.message})
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

router.get('/search',async (req,res)=>{
    try{
        const {destination}=req.query;
        // const {minPrice,maxPrice}=req.query;
        console.log("Query received:", req.query);  
        //removing all space 
        const formattedDestination = destination.replace(/\s+/g, ''); 
        const queryHotel = await Hotel.find({ location: { $regex: formattedDestination, $options: 'i' } });
        
        
        //for testing 
        if(queryHotel.length===0){
            console.log('cannot query the hotel from db')
           return res.status(404).json({message:'No result found'})
        }
        // }else{
        //     console.log(`the all query hotel ${queryHotel}`)
        // }
    

        // if(minPrice || maxPrice){  
        //     queryHotel.price={};

        //     if(minPrice){
        //         queryHotel.price.$gte=Number(minPrice)
        //     }else if(maxPrice){
        //          queryHotel.price.$lte=Number(maxPrice)
        //     }
        // }

        // const query=await Hotel.aggregate([{$match:queryHotel}]);
        res.json(queryHotel);
        

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