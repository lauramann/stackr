const express = require("express");
const app = express();

const checkout51Offers = require("./api/checkout51");
const flippOffers = require("./api/flipp");

app.get("/getOffers", function (req, res) {
  console.log("Scraping Checkout51...");
  checkout51Offers().then((data) => {
    let offers = [];
    console.log("Calling flip api...");
    data.forEach((offer) => {
      flippOffers(offer.offer_name, req.query.postalCode).then((clippings) => {
        offers.push({ offer, flippItems: clippings.items });
        if (offers.length === data.length) {
          res.send(offers);
        }
      });
    });
  });
});

app.listen("8081");
console.log("Magic happens on port 8081");
exports = module.exports = app;
