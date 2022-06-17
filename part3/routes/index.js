var express = require('express');
var router = express.Router();

var dataBikeVar = [
  { name: "BIK045", url: "/images/bike-1.jpg", price: 679 },
  { name: "ZOOK07", url: '/images/bike-2.jpg', price: 999 },
  { name: "TITANS", url: '/images/bike-3.jpg', price: 799 },
  { name: "CEWO", url: '/images/bike-4.jpg', price: 1300 },
  { name: "AMIG39", url: '/images/bike-5.jpg', price: 479 },
  { name: "LIK099", url: '/images/bike-6.jpg', price: 869 }
]

var dataCardBikeVar = []


// Home page
router.get('/', function (req, res, next) {
  res.render('index', { title: 'BikeShop - Home', dataBikeEJS: dataBikeVar });
});

//Shop
router.get('/shop', function (req, res, next) {
  // console.log(req.query)
  dataCardBikeVar.push({
    name: req.query.bikeNameFromFront,
    url: req.query.bikeUrlFromFront,
    price: req.query.bikePriceFromFront,
    quantity: 1
  })
  res.render('shop', { title: 'Shop', dataCardBikeEJS: dataCardBikeVar });
});

//Delete bike
router.get('/delete-shop', function (req, res) {
  dataCardBikeVar.splice(req.query.position, 1)
  res.render('shop', { dataCardBikeEJS: dataCardBikeVar });
})

//Update shop
router.post('/update-shop', function (req, res) {
  let position = req.body.position
  let newQuantity = req.body.quantity
  dataCardBikeVar[position].quantity = newQuantity
  res.render('shop', { dataCardBikeEJS: dataCardBikeVar });
})





//->Testing Get :
// router.get('/test/:id', function(req,res) {
//   res.render('test', { output: req.params.id });
// })


//->Testing Post :
// router.post('/test/submit', function(req,res) {
//   let id = req.body.id;
//   res.redirect('/test/'+id)
// })



module.exports = router;
