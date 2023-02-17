const express =require('express'); 
const contact = require('../models/contact');
const Contact=require('../models/contact');
const router =express.Router();


router.get('/listContact',(req,res,next)=>{
Contact.find((err,contacts)=>{
    if(err){
     console.log('error:',err);
    }else{
        res.json({title:"liste des contacts",cont:contacts});

    }
})
});
router.post('/addContact',(req,res,next)=>{
    var contact=new Contact({ fullName:req.body.name, phone:req.body.phone });
    contact.save((err,newcontact)=>{
        if(err){
            console.log('there is an error',err);
        } else {
            res.json(newcontact);
        }
    })
});
router.delete('/deleteContact/:id',(req,res,next)=>{
    var id=req.params.id; 
    Contact.findByIdAndRemove(id).then((data)=>{
res.send("deleted,succefully",data);
    });
});


module.exports=router; 