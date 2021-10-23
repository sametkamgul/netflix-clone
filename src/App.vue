<template>
    <HeaderCustom />
    <div class="grid-container">
        <div v-for="movie in movies" :key="movie.title">
            <div class="movie">
                <Card
                    :id="movie.id"
                    :title="movie.title"
                    :rating="movie.rating"
                    :releaseYear="movie.releaseYear"
                    :thumbnailUrl="movie.thumbnail"
                    :forwardUrl="movie.imdbUrl"
                />
            </div>
        </div>
    </div>
    <footer-custom />
</template>

<script>
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import FooterCustom from "./components/FooterCustom.vue";
import HeaderCustom from "./components/HeaderCustom.vue";
import NavigationBarRight from "./components/NavigationBarRight.vue";

export default {
    name: "App",
    components: {
        Button,
        Card,
        FooterCustom,
        HeaderCustom,
        NavigationBarRight,
    },
    data() {
        return {
            movies: this.movies,
        };
    },
    created() {
        this.getMovies();
    },
    methods: {
        async getMovies() {
            console.log("fetching movies...");
            const targetUrl = "/api/topMovies/25";
            // const targetUrl = "https://77895cdd-19f0-43f9-b39c-2365a37cbc59.mock.pstmn.io/api/topMovies/25"; //moch server
            await fetch(targetUrl)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.movies = data;
                })
                .catch((error) => {
                    console.log("[ERROR]", error);
                    return [];
                });
        },
    },
};
</script>

<style>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
    #app {
        /* Large devices (laptops/desktops, 992px and up) */
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
        margin-left: 20px;
    }
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        grid-gap: 10px;
        padding: 10px;
    }
    body {
        background-color: #3d0000;
    }
    img {
        color: white;
    }
}
@media only screen and (min-width: 700px) {
    #app {
        /* Large devices (laptops/desktops, 992px and up) */
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 20px;
        margin-left: 20px;
    }
    .grid-container {
        display: grid;
        grid-template-columns: auto minmax(200px, 1fr);
        /* height: 150vh; */
        grid-gap: 40px;
        margin: 0%;
        padding: 10px;
    }
    body {
        background-color: #000000;
    }
    /* img {
        color: white;
    } */
}
</style>
