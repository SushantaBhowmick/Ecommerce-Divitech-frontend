const bodyParser = require('body-parser');
const express = require('express');
const { default: mongoose } = require('mongoose');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const { errHandler, notfound } = require('./middlewares/errHandler');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const productRoutes =require('./routes/productRoutes');
const blogRoutes =require('./routes/blogRoutes');
const categoryRoutes =require('./routes/prodCategoryRoutes');
const blogCategoryRoutes =require('./routes/blogCategoryRoutes');
const brandRoutes =require('./routes/brandRoutes');
const colorRoutes =require('./routes/colorRoutes');
const couponRoutes =require('./routes/couponRoutes');
const enqRoutes =require('./routes/enqRoutes');
const morgan = require('morgan')
require('events').EventEmitter.prototype._maxListeners = 100

mongoose.set('strictQuery', false);
// app.use(emitter.setMaxListeners());
// process.setMaxListeners(0)
dbConnect();

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

//
app.get('/',(req,res)=>{
    res.send("hi its works ?");
})
//routes
app.use('/api/v1/product',productRoutes);
app.use('/api/v1/user',authRoutes);
app.use('/api/v1/blog',blogRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/blogcategory',blogCategoryRoutes);
app.use('/api/v1/brand',brandRoutes);
app.use('/api/v1/coupon',couponRoutes);
app.use('/api/v1/color',colorRoutes);
app.use('/api/v1/enq',enqRoutes);


//err handler
app.use(notfound);
app.use(errHandler);


//Server connection

app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`)
})


