const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const roomAPI = require('./public/src/api/room.api')
const categoryAPI = require('./public/src/api/category.api');

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8000;

mongoose.connect(MONGODB_URI,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}),(error)=>{
    if(error)
    {
        console.log("Database error : " , error.message);
    }
}

app.use('/room',roomAPI());
app.use('/category',categoryAPI());

mongoose.connection.once('open',()=>{
    console.log("Database connected");
});


app.listen(PORT,()=>{
    console.log("You are listening to port "+8000);
})



