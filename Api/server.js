require("dotenv").config()
const express= require("express");
 const app = express();
 const database= require("./config/db");
 database()

 const errMiddelWare= require("./middleWare/erorrMiddelWare")

 const port=process.env.PORT || 5000;
 //middelWare
 app.use(express.json());
 app.use(express.urlencoded({
    extended:false
 }));


//routes
 app.use("/api/tickets",require("./routes/tickets"));
 app.use("/api/clients", require("./routes/clients"));
 app.use("/api/buy", require("./routes/buy"));
 

 app.use(errMiddelWare)



 

 app.listen(port,()=>{
    console.log(`server start at port ${port}`)

 })