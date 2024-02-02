const expressAsyncHandler = require("express-async-handler")
const Clients = require("../models/clientsModel")


// GET /api/clients (Private)

const getClients = expressAsyncHandler(async (req, res) => {
   const client = await Clients.find()
   if (!client) {
      res.status(500)
      throw new Error(' Empty Clients ')
   }

   res.status(200).json(client)
})

// GET /api/clients/:id (Private)
const getClient = expressAsyncHandler(async (req, res) => {
   const client = await Clients.findById(req.params.id)
   if (!client) {
      res.status(500)
      throw new Error('Client Not Exsist')
   }
   res.status(200).json(client)
})

// DELETE /api/clients/:id (Private)

const deletClient = expressAsyncHandler(async (req, res) => {
   const client = await Clients.findByIdAndDelete(req.params.id)
   if (!client) {
      res.status(500)
      throw new Error('Client Not Exsist')
   }
   res.status(200).json(client)
})


module.exports = {
   getClients,
   getClient,
   deletClient
}













