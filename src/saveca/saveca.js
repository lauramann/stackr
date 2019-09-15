const axios = require('axios')
// const cheerio = require('cheerio');
// const $ = cheerio.load('<ul id="fruits">...</ul>');

export const getData = () => {
    // axios.get(url, { crossdomain: true })
    axios.get('https://www.checkout51.com/offers?callback=foo').then((response) => {
        // `response` is an HTTP response object, whose body is contained in it's `data` attribute

        // This will print the HTML source code to the console
        console.log(response.data)
    })
}

