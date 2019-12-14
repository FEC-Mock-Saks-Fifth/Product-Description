const express = require('express');
const bodyParser = require('body-parser');
const dbHelper = require('../db/dbhelpers.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("/Users/derickpark/Product-Description/client/dist"));

app.get('/derick_product_details', (req, res) => {
  dbHelper((err, result) => {
    if (err) {
      res.status(404).send('ERROR')
    } else {
      res.status(200).send(result[0])
    }
  })
})

const port = 3002;
app.listen(port, () => console.log(`Connected to port ${port}`));