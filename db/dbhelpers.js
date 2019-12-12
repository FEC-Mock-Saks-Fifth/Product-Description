const Product = require('./seed.js');

// var getProduct = callback => {
//   Product.findOne({price: 1290})
//     .exec(callback)
// }
// var getProduct = callback => {
//   Product.findOne({price: 198})
//     .exec(callback)
// }
var getProduct = callback => {
  Product.findOne({price: 265})
    .exec(callback)
}

module.exports = getProduct;

