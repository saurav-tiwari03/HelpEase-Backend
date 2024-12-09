const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname:{
    type:String,
    required:true,
    trim:true,
  },
  lastname:{
    type:String,
    trim:true,
  },
  userId:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
    trim:true,
  },
  phoneNumber:{
    type:Number,
    required:true,
    trim:true,
    unique:true,
  },
  role:{
    type:String,
    enum:['client','agent', 'admin'],
    default:'client',
    required:true,
  },
  issuesSolved:[{
    type:mongoose.Types.ObjectId,
    ref:'tickets'
  }],
  currentIssues:{
    type: mongoose.Types.ObjectId,
    ref:'tickets'
  },
  agentStatus:{
    type:String,
    enum: ['available', 'busy', 'on leave'],
    default: 'available'
  }

},{timestamps:true})

module.exports = mongoose.model('User',userSchema);