<template>
    <header>
        <div class="hamburger">
            <img src="../assets/bars-solid.svg" alt="" srcset="">
        </div>
        <div class="container-left">
            <a id="logo-text" href="#">SAMFLIX</a>
            <a href="#">home</a>
            <a href="#">movies</a>
            <a href="#">series</a>
            <a href="#">popular</a>
            <a href="#">my list</a>
        </div>
        <NavigationBarRight />
    </header>
</template>

<script>
import NavigationBarRight from "./NavigationBarRight.vue";

export default {
    name: "HeaderCustom",
    components: {
        NavigationBarRight,
    },
};
</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 700px) {
    header {
        text-align: left;
        color: whitesmoke;
        display: block;
        margin-bottom: 40px;
    }
    .hamburger {
        width: 2rem;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg)
        brightness(100%) contrast(100%);
        margin:0%;
        padding: 0%;
    }
    a {
        display: none;
        margin-bottom: auto;
        margin-top: auto;
        text-decoration: none;
        margin-right: 20px;
        text-align: center;
        font-size: 18px;
        color: whitesmoke;
    }
    #logo-text {
        margin-bottom: auto;
        margin-top: auto;
        margin-left: auto;
        text-decoration: none;
        text-align: center;
        font-size: 36px;
        color: red;
        font-weight: bolder;
    }
    .container-left {
        text-align: left;
        color: whitesmoke;
        display: inline;
        float: left;
        /* padding-right: 0px; */
    }
}

@media only screen and (min-width: 700px) {
    header {
        text-align: left;
        color: whitesmoke;
        display: block;
        margin-bottom: 40px;
    }
    .hamburger {
        display: none;
    }
    a {
        margin-bottom: auto;
        margin-top: auto;
        text-decoration: none;
        margin-right: 20px;
        text-align: center;
        font-size: 18px;
        color: whitesmoke;
    }
    #logo-text {
        margin-bottom: auto;
        margin-top: auto;
        margin-left: auto;
        text-decoration: none;
        text-align: center;
        font-size: 36px;
        color: red;
        font-weight: bolder;
    }
    .container-left {
        text-align: left;
        color: whitesmoke;
        display: inline;
        float: left;
        /* padding-right: 0px; */
    }
}
</style>