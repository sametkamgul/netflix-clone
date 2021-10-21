# test-project

## live-demo
[check it out!](https://simple-netflix-clone-vuejs.herokuapp.com)

## scraping data from imdb

>/topMovies/[id]

you can choose how many movies you get in order to the imdb ratings. 
```url
https://simple-netflix-clone-vuejs.herokuapp.com/topMovies/10
```

## dependencies

```
"core-js": "^3.6.5"
"express": "^4.17.1"
"vue": "^3.0.0"
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## TODOs:
- Thumbnails size are not good enough. It must be bigger
- Clicking the image should redirect user to the related imdb movie page
- In the top of the page user could change the specifi genre (API should support that too)
- User can achieve the information that which platforms (Disneyland, Netflix, etc.) serves the movie
- User login, add favourites, sharing with friends etc.