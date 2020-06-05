const express = require("express");
const app = express();

const checkout51 = require("./api/checkout51");
const flipp = require("./api/flipp");

app.get("/getOffers", function(req, res) {
    checkout51().then((data) => {
        let offers = [];
        data.forEach((offer) => {
            flipp(offer.offer_name, req.query.postalCode).then((flyer) => {
                offers.push({ offer, flippItems: flyer.items });
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