const mongoose=require('mongoose');

const guestDetailsSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 3 },
  lastName: { type: String, required: true, minlength: 1 },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  specialRequest: { type: String }
});

module.exports=mongoose.model('guestDetails',guestDetailsSchema);
