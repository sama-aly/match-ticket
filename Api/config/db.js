const mongoose =require("mongoose");

const connectDB = async()=>{
   
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true
        }).connection;
        console.log("db connect successfully");
    } catch(error){
        process.exit(1)
       console.error(error);
    }

}



module.exports=connectDB;
