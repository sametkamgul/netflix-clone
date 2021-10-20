<template>
    <header>
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
header {
    text-align: left;
    color: whitesmoke;
    display: block;
    margin-bottom: 40px;
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
</style>