
const { urlencoded } = require('express');
const mongoose = require('mongoose');

const projectschema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   title: {type:String, required: true},
   imageUrl : {type:String, required: true}
   
});

module.exports = mongoose.model('project', projectschema);