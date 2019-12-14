const Product = require('./seed.js');

var getProduct = callback => {
  Product.findRandom({}, {}, {limit: 1}, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result)
    }
  })
}

module.exports = getProduct;

