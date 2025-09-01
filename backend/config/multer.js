const multer = require('multer');
const {CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');

//for hotel images
const hotelStorage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'hotels',
        allowed_formats:['jpg','png','jpeg']
    }
})

const uploadHotel = multer({storage:hotelStorage});

//for trending destinations
const TrendinglocationStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "Trending locations",
    allowed_formats: ["jpg", "png", "jpeg"]
  }
});
const uploadTrendingLocation = multer({ storage: TrendinglocationStorage });

module.exports = {uploadHotel,uploadTrendingLocation};