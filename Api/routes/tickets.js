const express= require("express");
const router= express.Router();

const {getTickets , getTicket, setTicket ,updateTicket ,deleteTicket}= require("../controllers/tickertsController");

// create read update delete


/*router.get("/",getTickets)  //read all
router.get("/:id",getTicket)  // read one
router.post("/",setTicket)     //create one 
router.put("/:id",updateTicket)      // update one
router.delete("/:id",deleteTicket) */     // delete one
router.route("/")
.get(getTickets)
.post(setTicket);


router.route("/:id")
.get(getTicket)
.put(updateTicket)
.delete(deleteTicket);




module.exports= router;