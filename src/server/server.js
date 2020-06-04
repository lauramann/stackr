const express = require('express');
const app = express();

const getCheckout51 = require('./api/checkout51');
const flipp = require('./api/flipp');


app.get('/getOffers', function(req, res) {
    let checkoutOffers = getCheckout51()

    // .then(data => {
    //     let offers = [];
    //     data.forEach((offer) => {
    //         // console.log(callFlipp(offer, req.query.postalCode));


    //     })
    //     console.log("OFFERS ARR", offers);
    //     // res.send(data);
    // })
    let flipOffers = checkoutOffers.then(data => {
        data.forEach((offer) => {
            flipp(offer.offer_name, req.query.postalCode).then(data => {
                return { offer, flippItems: result.items }
                // .then(data => {
                //     console.log('OFFER', offer);
                //     console.log('FLIPP DEALS', data);
                //     // res.send(data);
                //     offers.push({ offer, flippItems: data.items.length })
                //         // arr.push({offer, flippItems: data.items.length})
                // })
            })

        })
    })

    res.send(flipOffers)

    // flipp(offer.offer_name, req.query.postalCode).then(data => {
    //     console.log('OFFER', offer);
    //     console.log('FLIPP DEALS', data);
    //     // res.send(data);
    //     offers.push({ offer, flippItems: data.items.length })
    //         // arr.push({offer, flippItems: data.items.length})
    // })
})


app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;