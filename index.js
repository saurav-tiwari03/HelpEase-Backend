const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const {connect} = require('./config/database')

//middlewares
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT , () => {
  console.log('Server listening on port : ' + PORT)
  connect()
})

app.get('/', (req, res) => {
  res.json({message:'Hello, World!'})
})

const router = require('./routes/route');
app.use('/api/v1',router);