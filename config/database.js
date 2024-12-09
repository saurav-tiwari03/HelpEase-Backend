const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URL,{
      dbName:process.env.DB_NAME
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
}
