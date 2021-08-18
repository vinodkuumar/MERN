const {Category} = require('../models/category');
const express = require('express');
const router = express.Router();

router.get(`/`, async (req,res) => {
    const categoryList = await Category.find();

    if(!categoryList){
        res.status(500).json({success: false})
    }
    res.status(200).send(categoryList);
})

router.get('/:id', async(req,res)=>{
    const category = await Category.findById(req.params.id);

    if(!category) {
        res.status(500).json({message: 'The category with the given ID was not found.'})
    } 
    res.status(200).send(category);
})