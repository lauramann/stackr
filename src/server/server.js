const express = require('express');
const app = express();

const checkout51 = require('./api/checkout51');
const flipp = require('./api/flipp');


app.get('/getOffers', function (req, res) {
    console.log(req.query);

    checkout51().then(data => {
      res.send(data);
    })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;