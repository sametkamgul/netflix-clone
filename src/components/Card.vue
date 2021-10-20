<template>
    <div class="container">
        <p>{{ id }}</p>
        <p>{{ title }}</p>
        <p>{{ releaseYear }}</p>
        <img :src="thumbnailUrl" v-on:click="forward" v-bind:alt="title" />
        <p>rating: {{ rating }}/10.0</p>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        id: String,
        title: String,
        releaseYear: String,
        thumbnailUrl: String,
        rating: String,
        forwardUrl: String,
    },
    methods: {
        forward() {
            console.log("forwarding to movie url");
            // window.open(this.forwardUrl);
        },
    },
};
</script>

<style scoped>
.container {
    /* width: 65%; */
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
}
img {
    max-width: 100%;
    max-height: 100%;
    width: 15rem;
    margin: auto;
    display: block;
    border: 2px solid #ddd;
    border-radius: 25px;
    padding: 0px;
    transition: transform 0.05s;
    transition-timing-function: ease-in-out;
}
img:hover {
    transform: scale(1.3);
}
p {
    max-width: 100%;
    max-height: 100%;
    margin: 5px;
    display: block;
    /* padding: 5px; */
    text-align: center;
    font-size: 18px;
    color: whitesmoke;
}
</style>