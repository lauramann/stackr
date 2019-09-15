const express = require('express');
const fs = require('fs');
// const request = require('request');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

app.get('/checkout51', function (req, res) {

    const url = 'https://www.checkout51.com/offers';
    // url = 'http://www.imdb.com/title/tt1229340/';

    // Use the `get` method of axios with the URL of the ButterCMS documentation page as an argument
    axios.get(url)
        .then((response) => {
          const offers = [];
          // console.log(response.data);
          const $ = cheerio.load(response.data);
          $('.title.normal').each(function(i, elm) {
            offers.push({
              offer_name: $(this).find('.offer-name').text(),
              offer_description: $(this).find('.offer-description').text(),
              cash_back_amount: $(this).find('.cash-back-amount').text(),
              cash_back_description: $(this).find('.cash-back-description').text(),
            });
          });
          res.send(JSON.stringify(offers))
        })
        .catch((response) => {console.log("error")})
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;