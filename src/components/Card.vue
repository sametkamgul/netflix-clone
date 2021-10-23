<template>
    <div class="container">
        <p class="id-text">#{{ id }}</p>
        <p class="title-text">{{ title }}</p>
        <p class="release-year-text">{{ releaseYear }}</p>
        <div class="container-img">
            <img
                class="thumbnail-url"
                :src="thumbnailUrl"
                v-on:click="forward"
                v-bind:alt="title"
            />
            <img
                class="forwarding-img"
                src="../assets/eye-solid.svg"
                alt="forwarding-img"
            />
        </div>
        <p class="rating-text">rating: {{ rating }}/10.0</p>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        id: String,
        title: String,
        releaseYear: String,
        imdbUrl: String,
        thumbnailUrl: String,
        rating: String,
        forwardUrl: String,
    },
    methods: {
        forward() {
            console.log("forwarding to movie url");
            window.open(this.forwardUrl);
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
}
.container-img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    position: relative;
    display: block;
}
.thumbnail-url {
    /* max-width: 100%;
    max-height: 100%; */
    /* width: 8rem; */
    margin: auto;
    display: block;
    border: 2px solid #ddd;
    border-radius: 25px;
    padding: 0px 0px 0px 0px;
    transition: transform 0.05s;
    transition-timing-function: ease-in-out;
    /* object-fit: cover; */
    height: 10rem;
}
.thumbnail-url:hover {
    transform: scale(1.1);
}
.thumbnail-url:hover + .forwarding-img {
    display: block;
    width: 3rem;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg)
        brightness(100%) contrast(100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.forwarding-img {
    display: none;
}
p,
.id-text,
.title-text,
.release-year-text {
    max-width: 100%;
    max-height: 100%;
    margin: 5px;
    display: block;
    padding-bottom: 5px;
    text-align: center;
    font-size: 18px;
    color: whitesmoke;
}
.rating-text {
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 0px;
    display: block;
    padding-bottom: 5px;
    text-align: center;
    font-size: 18px;
    color: whitesmoke;
}
</style>