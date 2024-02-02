const Tickets = require("../models/ticketsModel");
const expressAsyncHandler= require("express-async-handler");



const getTickets=expressAsyncHandler(async(req,res)=>{
    const ticket= await Tickets.find()

     if(!ticket){
        res.status(500)
        throw new Error(" no tickets ")
     }
    res.status(200).json(ticket)
    
    
}) 
   
   
   

//git/api/tickets/:id
const getTicket= expressAsyncHandler( async(req,res)=>{

    const ticket= await Tickets.findById(req.params.id)
    
    if(!ticket){
        res.status(500)
        throw new Error("ticket not exist")
    }
        res.status(200).json(ticket)
    


})
    
 
 
//post/api/tickets

const setTicket= expressAsyncHandler(async(req,res)=>{
    const ticket= await Tickets.create({
        header:req.body.header,
        date:req.body.date,
        getsOpen:req.body.getsOpen,
        stadium:req.body.stadium,
        team1:req.body.team1,
        team2:req.body.team2,
        price:req.body.price,
        color:req.body.color,
        round:req.body.round,
        maxTicket:req.body.maxTicket,
        currentTickets:req.body.currentTickets,


    })
    
    res.status(201).json(ticket)
})
   
   
   


//put/api/tickets/:id
const updateTicket=expressAsyncHandler(async(req,res)=>{
    const ticket = await Tickets.findById(req.params.id)

    if(!ticket){
        res.status(500)
        throw new Error(" tickets not exists")
    }
    const updateTicket= await Tickets.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    })
    res.status(200).json(updateTicket)
    
    
})
    
        
    

const deleteTicket= expressAsyncHandler(async(req,res)=>{
    const ticket = await Tickets.findById(req.params.id)
    if(!ticket){
        res.status(500)
        throw new Error(" tickets not exists")
    }
    const deleteTicket= await Tickets.findByIdAndDelete(req.params.id,req.body,{
        new:true,
    })
 
    
    res.status(200).json({
        id: req.params.id,
        message:`Ticket id  : ${req.params.id} has been removed`
    })
})





/*const deleteTicket = expressAsyncHandler(async (req, res) => {
    const ticket = await Tickets.findById(req.params.id);
    if (!ticket) {
      res.status(404).json({
        message: 'Ticket not found',
      });
    } else {
      await ticket.remove();
      res.status(200).json({
        id: req.params.id,
        message: `Ticket ID: ${req.params.id} has been removed`,
      });
    }
  });*/








module.exports={
    getTickets,getTicket , setTicket , updateTicket ,deleteTicket
}