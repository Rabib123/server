const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const projectmongo = require('../models/project.js');

router.post('/', (req,res,next) =>{
      
    const db = new projectmongo({
        _id: new mongoose.Types.ObjectId(),
        title : req.body.title,
        imageUrl: req.body.url
        
   });
   db.save()
   .then(result =>{
        res.status(201).json({
             
             message : "Handling Post done ",
             result : result

        })
        console.log(result);
        
   }).catch(err => console.log(err));

})

router.post('/', (req,res,next) =>{
      
    const db = new projectmongo({
        _id: new mongoose.Types.ObjectId(),
        title : req.body.title,
        imageUrl: req.body.url
        
   });
   db.save()
   .then(result =>{
        res.status(201).json({
             
             message : "Handling Post done ",
             result : result

        })
        console.log(result);
        
   }).catch(err => console.log(err));

})

router.get('/', (req,res,next) => {
     projectmongo.find()
     .then(result => {
          console.log(result);
          return res.status(200).json(result)})
     .catch(error => console.log(error));
})

router.delete('/:id',(req,res,next) =>{
     projectmongo.findByIdAndDelete({_id: req.params.id})
     .then(result => res.status(201).json({
               
          message : "Handling Post done ",
          result : result

     }))
     .catch(error => console.log(error));
})
module.exports = router;
