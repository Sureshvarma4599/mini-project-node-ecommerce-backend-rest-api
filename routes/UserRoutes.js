const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {User} =require('../models/User.js')
 router.get('/',(req,res)=>{
     User.find((err,docs)=>{
         if(!err){
             res.send(docs);
         }
         else{
             console.log(json.stringify(err))
         }
     })

 })

 
 router.post('/',(req,res)=>{
    var user = new User({
       email : req.body.email,
        password : req.body.password
        
    })
    user.save((err,docs)=>{
        
       if(!err){
           res.send(docs);
       }
       else{
           console.log(JSON.stringify(err))
       }

    })
})


router.put('/:id', (req, res) => {
   if (!ObjectId.isValid(req.params.id))
       return res.status(400).send(`No record with given id : ${req.params.id}`);

   var user = {
    email : req.body.email,
    password : req.body.password
    
   };
   User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Update :' + JSON.stringify(err, undefined, 2)); }
   });
});


router.delete('/:id', (req, res) => {
   if (!ObjectId.isValid(req.params.id))
       return res.status(400).send(`No record with given id : ${req.params.id}`);

   User.findByIdAndRemove(req.params.id, (err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
   });
});
 module.exports=router
