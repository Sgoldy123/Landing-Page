//import
const express =require('express')
const cors=require('cors')
const app=express();
const PORT=5000;
const mongoose = require('mongoose');
const {MONGOURI} =require('./keys')

//database
mongoose.connect(MONGOURI,{ useNewUrlParser: true ,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('database is connected')
});

require('./schema')

//middleware

app.use(express.json())
app.use(cors());

//routes
app.use(require('./routes'))



//server
app.listen(PORT,()=>console.log('server is running at 5000'))

