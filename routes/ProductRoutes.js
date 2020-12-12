const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Product} =require('../models/Product.js')
 router.get('/',(req,res)=>{
    Product.find((err,docs)=>{
         if(!err){
             res.send(docs);
         }
         else{
             console.log(json.stringify(err))
         }
     })

 })

 
 router.post('/',(req,res)=>{
    var product = new Product({
        name: req.body.name,
       price: req.body.price,
        productImage : req.body.productImage
        
    })
    product.save((err,docs)=>{
        
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

   var product = {
    name: req.body.name,
       price: req.body.price,
        productImage : req.body.productImage
    
   };
   Product.findByIdAndUpdate(req.params.id, { $set: product}, { new: true }, (err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in Update :' + JSON.stringify(err, undefined, 2)); }
   });
});


router.delete('/:id', (req, res) => {
   if (!ObjectId.isValid(req.params.id))
       return res.status(400).send(`No record with given id : ${req.params.id}`);

   Product.findByIdAndRemove(req.params.id, (err, doc) => {
       if (!err) { res.send(doc); }
       else { console.log('Error in  Delete :' + JSON.stringify(err, undefined, 2)); }
   });
});
 module.exports=router
