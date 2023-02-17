const express =require('express');
const app =express ();
const logger= require('morgan'); 
const createError =require('http-errors');
const contactrouter= require('./routes/contacts.js');
const dbconfig=require('./database/mongodb.json');
const mongoose=require("mongoose");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use('/contact',contactrouter);

app.use((req,res,next)=>{
   next(createError(404)); 
});
mongoose.set('strictQuery', true);
mongoose.connect(dbconfig.mongo.uri);

module.exports= app ;  