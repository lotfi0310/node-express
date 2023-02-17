const mongoose=require('mongoose'); 
const schema= mongoose.Schema; 

 var contact=new schema(
    {
        fullName:String,
        phone :Number 
    }
 );
 module.exports=mongoose.model('Contact',contact); 