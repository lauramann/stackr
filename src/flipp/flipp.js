import axios from 'axios';

// const BASE_URL = 'https://flipp.com'
const BACKEND_URL = 'https://backflipp.wishabi.com/flipp';
const SEARCH_URL = BACKEND_URL + '/items/search';
// const ITEM_URL = '%s/items/' % BACKEND_URL

export const search = async(query, postal_code) => {
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


// axios({
//     method: 'get',
//     url: 'http://bit.ly/2mTM3nY',
//     responseType: 'stream'
//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });