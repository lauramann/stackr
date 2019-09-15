// const express = require('express');
// const app = express();
// const port = 5000;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const fetch = require('node-fetch');

// // require('./routes')(app);

// app.get('/', (req, res) => {
//     res.send('PORT 5000');
// })

// app.post('/checkout51', (req, res) => {
//     const requestBody = req.body;
//     // const apiUrl = generateWebAppURL(requestBody.locationType, requestBody.locationData);

//     fetch('https://www.checkout51.com/offers')
//         .then(res => res.json())
//         .then(data => {
//             res.send({ data });
//             console.log(data);
//         })
//         .catch(err => {
//             res.redirect('/error');
//         });
// });

// app.listen(port, (err) => {
//     if (err) { console.log(err) };
//     console.log('Listening on port ' + port);
// })

const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();

app.get('/scrape', function (req, res) {

    url = 'http://www.imdb.com/title/tt1229340/';

    request(url, function (error, response, html) {
        if (!error) {
            console.log(res);
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { title: "", release: "", rating: "" };

            $('.header').filter(function () {
                var data = $(this);
                title = data.children().first().text();
                release = data.children().last().children().text();

                json.title = title;
                json.release = release;
            })

            $('.star-box-giga-star').filter(function () {
                var data = $(this);
                rating = data.text();

                json.rating = rating;
            })
        }

        // To write to the system we will use the built in 'fs' library.
        // In this example we will pass 3 parameters to the writeFile function
        // Parameter 1 :  output.json - this is what the created filename will be called
        // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
        // Parameter 3 :  callback function - a callback function to let us know the status of our function

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {

            console.log('File successfully written! - Check your project directory for the output.json file');

        })

        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        res.send('Check your console!')

    });
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;