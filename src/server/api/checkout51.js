const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.checkout51.com/offers';

const getCheckout51 = () => {
    return axios.get(url)
        .then((response) => {
            const offers = [];
            const $ = cheerio.load(response.data);
            $('.title.normal').each(function(i, elm) {
                offers.push({
                    offer_name: $(this).find('.offer-name').text(),
                    offer_description: $(this).find('.offer-description').text(),
                    offer_img: $(this).find('img').attr('src'),
                    cash_back_amount: parseFloat($(this).find('.cash-back-amount').text().substring(1)),
                    cash_back_description: $(this).find('.cash-back-description').text()
                });
            });
            return (offers);
            
        })
        .catch((error) => { console.log("error fetching checkout51 data", error) })
}

module.exports = getCheckout51;