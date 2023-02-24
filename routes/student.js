const express =require('express'); 
const Student =require('../models/student');
const router =express.Router();

router.get('/listStudents',(req,res,next)=>{
    Student.find((err,students)=>{
        if(err){
         console.log('error:',err);
        }else{
            res.json(students);
    
        }
    })
    });

    router.get('/:name',(req,res,next)=>{
        Student.findOne({fullName:req.params.name},(err,student)=>{
            if(err){
                console.log('error:',err);
            }else{
                res.json(student);
            }
        })
    })

    router.delete('/deleteStudent/:id',(req,res,next)=>{
        Student.remove({_id:req.params.id},(err,result)=>{
            if(err){
                res.json(err);
            }else{
                res.json(result);
            }
        })
    })
 
    router.put('/updateStudent/:id',(req,res,next)=>{
        Student.findById(req.params.id,(err,student)=>{
            if(!student){
                res.status(404).send('data is not found');
            }else{
                student.fullName=req.body.name;
                student.phone=req.body.phone;
                student.save().then(student=>{
                    res.json('student updated');
                })
                .catch(err=>{
                    res.status(400).send("update not possible");
                });
            }
        })
    })
router.post('/addStudent',(req,res,next)=>{
    Student.findOne({ fullName: req.body.name }, (err, existingStudent) => {
        if (existingStudent) {
            res.status(409).json({ message: 'A student with this name already exists' });
        } 
        else{
            let student = new Student({
                fullName: req.body.name,
                phone: req.body.phone
            });
            student.save((err, student) => {
                if (err) {
                    res.status(500).json({ message: 'Internal server error' });
                } else {
                    res.status(201).json({ message: 'Student created successfully' });
                }
            }); 
        }
    });
   
})
module.exports=router; 