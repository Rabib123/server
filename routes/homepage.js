const express = require("express");

const router = express.Router();


router.get('/', (req,res)=>{
    res.send('Node Server is working');
    console.log('Node js is working');
})

module.exports = router;