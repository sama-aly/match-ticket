/*const express = require('express');
const router = express.Router();
const {getTicketBuy,setTicketBuy}=require("../controllers/buyController")

router.route("/id:")
   .get(getTicketBuy)
   .post(setTicketBuy)


module.exports = router;*/


const express = require('express')
const {
   getTicketBuy,
   setTicketBuy
} = require('../controllers/buyController')
const router = express.Router()

// Get all tikets & Craete new teket
router.route("/:id")
   .get(getTicketBuy)
   .post(setTicketBuy)




module.exports = router


//sama