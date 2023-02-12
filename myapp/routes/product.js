var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', (req, res, next)=> {
  fs.readFile('./routes/products.json', (err, data)=> {
    if (err) {
      return next(err);
    }
    res.send(JSON.parse(data));
  });
});

 router.get('/:id',(req,res,next)=>{
    fs.readFile('./routes/products.json', (err, data)=> {
      
        var products = JSON.parse(data);
        var product = products[req.params.id];
        if (!product) {
          return next(new Error("Product not found"));
        }
        res.send(product);
      });
 });


 router.get('/:id/:qt', (req, res, next)=> {
    var productId = req.params.id;
    var qt = req.params.qt;
  
    var products = require("../routes/products.json");
    var product = products[productId];
   
  
    var total = qt * product.price;
  
    res.send("The total price for " + qt + " " + product.name + " is $" + total);
  });

/*
  router.get('/instock/:qt', (req, res, next)=> {
    let inStockProducts = [];
    for (let product in products) {
      if (products[product].stock >= req.params.qt) {
        inStockProducts.push(products[product]);
      }
    }
    res.json(inStockProducts);
  });
*/
module.exports = router;