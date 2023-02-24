const mongoose=require('mongoose'); 
const schema= mongoose.Schema; 

 var student=new schema(
    {
        fullName:String,
        phone :Number 
    }
 );
 module.exports=mongoose.model('Student',student); 