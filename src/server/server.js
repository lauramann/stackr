const express = require('express');
const app = express();

const checkout51 = require('./api/checkout51');
const flipp = require('./api/flipp');



app.get('/getOffers', function(req, res) {
    let offers = []
    checkout51().then(data => {
        data.forEach((offer) => {
                // console.log('OFFER', offer);
                // console.log(callFlipp(offer, req.query.postalCode));
                flipp(offer.offer_name, req.query.postalCode).then(data => {
                    // console.log('FLIPP DEALS', data);
                    // res.send(data);
                    // return { offer, flippItems: data.items }
                    offers.push({ offer, flippItems: data.items })
                })

            }).then(() => {
                console.log(offers)
                res.send(offers)
            })
            // res.send(data);
    })
})


app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;