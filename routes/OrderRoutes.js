const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {order} =require('../models/Order.js')
 router.get('/',(req,res)=>{
    order.find((err,docs)=>{
         if(!err){
             res.send(docs);
         }
         else{
             console.log(json.stringify(err))
         }
     })

 })

 
 router.post('/',(req,res)=>{
    var Order = new order({
       product : req.body.product,
        quantity : req.body.quantity
        
    })
    Order.save((err,docs)=>{
        
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

   var Order = {
    product : req.body.product,
    quantity : req.body.quantity
    
   };
   order.findByIdAndUpdate(req.params.id, { $set: Order }, { new: true }, (err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Update :' + JSON.stringify(err, undefined, 2)); }
   });
});


router.delete('/:id', (req, res) => {
   if (!ObjectId.isValid(req.params.id))
       return res.status(400).send(`No record with given id : ${req.params.id}`);

   order.findByIdAndRemove(req.params.id, (err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
   });
});
 module.exports=router
