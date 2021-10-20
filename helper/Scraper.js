const axios = require('axios');
const cheerio = require('cheerio');

// async function getPostTitles() {
//     try {
//         const { data } = await axios.get(
//             'https://old.reddit.com/r/programming/'
//         );
//         const $ = cheerio.load(data);
//         const postTitles = [];

//         $('div > p.title > a').each((_idx, el) => {
//             const postTitle = $(el).text();
//             postTitles.push(postTitle);
//         });

//         return postTitles;
//     } catch (error) {
//         throw error;
//     }
// }

async function getImdbTopMovies(limit=10) {
    const orders = new Array();
    const movies = new Array();
    const posters = new Array();
    const titles = new Array();
    const ratings = new Array();
    const releaseYears = new Array();

    try {
        const { data } = await axios.get('https://www.imdb.com/chart/top/');
        const $ = cheerio.load(data);

        $('.lister-list tr').each((_idx, el) => {
            if (_idx >= limit) return;
            const orderelements = el;
            const titleElements = el;
            const ratingElements = el;
            const posterElements = el;
            const releaseYearelements = el;

            // orders
            let orderRaw = $(orderelements)
                .find('.titleColumn').text();
            let order = orderRaw.split('\n');
            order = parseInt(order[1]);
            // console.log('order', data);
            orders.push(order);

            // release year
            let releaseYear = $(releaseYearelements)
                .find('span')
                .text();
            releaseYears.push(releaseYear);

            // titles
            let title = $(titleElements)
                .find('a')
                .text();
            title = title.replaceAll('\n', ''); // removes unnecessary newline char
            title = title[0] === ' ' ? title.slice(1) : title; // removes unnecessary whitespace at the beginning of string
            titles.push(title);

            // posters
            let poster = $(posterElements)
                .find('a')
                .find('img')
                .attr('src');
            posters.push(poster);

            // ratings
            let rating = $(ratingElements)
                .find('strong')
                .text();
            ratings.push(rating);
            movies.push({id:order, title: title, releaseYear: releaseYear, rating: rating, thumbnail: poster});
        });
        // console.log(movies);
        return movies;
    } catch (error) {
        throw error;
    }
}

// getPostTitles()
// .then((postTitles) => console.log(postTitles));

// getImdbTopMovies().then((movies) => {
//     // console.log(movies);
// });

// module.exports.getPostTitles = getPostTitles;
module.exports.getImdbTopMovies = getImdbTopMovies;
