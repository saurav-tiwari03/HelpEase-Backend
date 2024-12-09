const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  clientId:{
    type:mongoose.Types.ObjectId,
    required:true,
    ref:'user'
  },
  issueTitle:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:['unassigned', 'assigned', 'resolved', ],
    default:'unassigned',
  },
  agentId:{
    type:mongoose.Types.ObjectId,
    required:true,
    ref:'user'
  }
})

module.exports = mongoose.model('Ticket', ticketSchema);