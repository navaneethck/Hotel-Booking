const express= require('express');
const router = express.Router();
const {guestDetails} = require('../controller/guestDetails');

router.post('/guestdetails',guestDetails);

module.exports=router;