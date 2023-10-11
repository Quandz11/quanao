var express = require('express');
const clothesModel = require('../models/clothesModel');
var router = express.Router();
//localhost:3001/clothes
router.get('/', async (req,res) =>{
    var clothes = await clothesModel.find();
    //render ra file view va tra du lieu ve tu bien clothes
    res.render('clothes/index', {clothes : clothes})
})

router.get('/detail/:id', async(req, res) =>{
    var id = req.params.id;
    var clothes = await clothesModel.findById(id);
    res.render('clothes/detail', {clothes : clothes})
})

router.get('/delete/:id', async (req,res)=>{
    var id = req.params.id;
    await clothesModel.findByIdAndDelete(id);
    res.redirect('/clothes');
})

router.get('/add', (req,res) =>{
    res.render('clothes/add')
})

router.post('/add', async (req, res) =>{
    var clothes = req.body;
    await clothesModel.create(clothes);
    console.log('succeed');
    res.redirect('/clothes');
})

router.get('/edit/:id', async (req,res) => {
    var id = req.params.id
    var clothes = await clothesModel.findById(id)
    res.render('clothes/edit', { clothes : clothes})
})
router.post('/edit/:id', async (req, res)=>{
   var id = req.params.id;
   var clothes = req.body;
   await clothesModel.findByIdAndUpdate(id, clothes);
   res.redirect('/clothes');
})
router.post('/cart', async (req, res)=>{
    var id = req.body.id;
    var quantity = req.body.qty;
    var clothes = await clothesModel.findById(id)
    res.render('clothes/cart', {clothes : clothes, quantity})

})
module.exports = router;