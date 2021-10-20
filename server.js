const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const bodyParser = require("body-parser");
const scraper = require('./helper/Scraper');

var app = express();
app.use(express.json());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 3000;

// scraper.getPostTitles().then(posts => {
//     console.log(posts);
// })

app.get('/topMovies/:limit', async (req, res) => {
    const limit = req.params.limit;
    let result = await scraper.getImdbTopMovies(limit);
    // console.log('top movies', result);
    res.json(result);
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
