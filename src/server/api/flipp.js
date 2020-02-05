const axios = require('axios');

const BACKEND_URL = 'https://backflipp.wishabi.com/flipp';
const SEARCH_URL = BACKEND_URL + '/items/search';

const getFlipp = async(query, postal_code) => {
    return await axios.get(SEARCH_URL, {
        params: {
          q: query,
          postal_code: postal_code
        }
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports = getFlipp;