const mongoose= require('mongoose')
const model = require('../Model/product')
const Product= model.Product;


exports.createProduct = (req, res) => {
  const product= new Product(req.body);
  product.save().then(()=>[
    res.json(product)
  ]).catch((err)=>{
    console.log(err)
  })
};

exports.getAllProduct = async (req, res) => {
  const products= await Product.find();
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const product =await Product.findById(id);
  res.json(product);
};

exports.replaceProduct =async (req, res) => {
  const id = req.params.id;
  await Product.findOneAndReplace({_id:id},req.body)
  res.status(201).json(req.body);
};

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findOneAndUpdate({_id:id},req.body)
    res.send(201).json(product);
};

exports.deleteProduct = (req, res) => {
  const id = JSON.stringify(req.params.id);
  try{
    const product=Product.findOneAndRemove({_id:id});
    res.status(201).json(product)
  }
  catch(err) {
    console.log(err);
    res.status(400).json(err);
  }
};
