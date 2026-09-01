const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
let cart = [];
app.post('/api/cart', (req,res)=>{
  const {productId, qty} = req.body;
  if(!productId || !qty) return res.status(400).json({error:'Invalid'});
  cart.push({productId, qty, added: Date.now()});
  res.json({cart});
});
app.get('/api/cart', (req,res)=> res.json(cart));
app.listen(3000, ()=> console.log('E-Commerce API on 3000'));
