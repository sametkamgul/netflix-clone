<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <Button text="Click me!!!" />
    <Button text="Don't click me!!!" /> -->
    <HeaderCustom />
    <div class="grid-container">
        <div class="item1">
            <Card
                title="Avengers: Infinity War"
                rating="8.1"
                thumbnailUrl="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
                forwardUrl="https://www.imdb.com/title/tt4154756/?ref_=nv_sr_srsg_0"
            />
        </div>
        <div class="item2">
            <Card
                title="Avengers: End Game"
                rating="8.1"
                thumbnailUrl="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                forwardUrl="https://www.imdb.com/title/tt4154796/?ref_=tt_mv_close"
            />
        </div>
        <div class="item1">
            <Card
                title="Avengers: Infinity War"
                rating="8.1"
                thumbnailUrl="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
                forwardUrl="https://www.imdb.com/title/tt4154756/?ref_=nv_sr_srsg_0"
            />
        </div>
        <div class="item2">
            <Card
                title="Avengers: End Game"
                rating="8.1"
                thumbnailUrl="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                forwardUrl="https://www.imdb.com/title/tt4154796/?ref_=tt_mv_close"
            />
        </div>
        <div class="item1">
            <Card
                title="Avengers: Infinity War"
                rating="8.1"
                thumbnailUrl="https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg"
                forwardUrl="https://www.imdb.com/title/tt4154756/?ref_=nv_sr_srsg_0"
            />
        </div>
        <div class="item2">
            <Card
                title="Avengers: End Game"
                rating="8.1"
                thumbnailUrl="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                forwardUrl="https://www.imdb.com/title/tt4154796/?ref_=tt_mv_close"
            />
        </div>
    </div>
    <footer-custom />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import FooterCustom from "./components/FooterCustom.vue";
import HeaderCustom from "./components/HeaderCustom.vue";
import NavigationBarRight from "./components/NavigationBarRight.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        Button,
        Card,
        FooterCustom,
        HeaderCustom,
        NavigationBarRight
    },
};
</script>

<style>
#app {
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
body{
    background-color: #121314;
}
img {
    color: white;
}
</style>
