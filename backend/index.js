const bodyParser = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./Routes/authRoutes');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const { errHandler, notfound } = require('./middlewares/errHandler');
const cookieParser = require('cookie-parser');


mongoose.set('strictQuery', false);
dbConnect();

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//
app.get('/',(req,res)=>{
    res.send("hi its works ?");
})
//routes
app.use('/api/v1',authRoutes);


//err handler
app.use(notfound);
app.use(errHandler);


//Server connection

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})