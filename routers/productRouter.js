const express = require('express');
const  router=express.Router();
router.get('/add',(req,res)=>{
    res.send('add response from product')
    
});
router.get('/getall',(req,res)=>{
    res.send('getall response from product')
});
router.get('/update',(req,res)=>{
    res.send('update response from the product')
});
module.exports=router;