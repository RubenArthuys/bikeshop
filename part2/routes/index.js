// Index.js = Inventaire des Routes

//On charge express
var express = require('express');
//router = instance de Router() à travers express
var router = express.Router();

var dataBikeVar = [
  { name : "BIK045" , url : "/images/bike-1.jpg", price : 679 },
  { name : "ZOOK07" , url : '/images/bike-2.jpg', price : 999 },
  { name : "TITANS" , url : '/images/bike-3.jpg', price : 799 },
  { name : "CEWO" , url : '/images/bike-4.jpg', price : 1300 },
  { name : "AMIG39" , url : '/images/bike-5.jpg', price : 479 },
  { name : "LIK099" , url : '/images/bike-6.jpg', price : 869 }    
]

var dataCardBikeVar = [
  { name : "BIK045" , url : "/images/bike-1.jpg", price : 679, quantity:1 },
  { name : "ZOOK07" , url : '/images/bike-2.jpg', price : 999, quantity:4 },  
]

//Home page - Methode GET (methode = function)
router.get('/', function(req, res) {
  res.render('index', { title: 'BikeShop - Home', dataBikeEJS : dataBikeVar });
});

router.get('/shop', function(req, res) {
  res.render('shop', { title : 'Shop', dataCardBikeEJS : dataCardBikeVar });
});

module.exports = router;
