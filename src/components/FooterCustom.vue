<template>
    <footer>
        <a href="#">contact</a>
        <a href="#">about</a>
        <a href="#">privacy</a>
        <a href="#">career</a>
    </footer>
</template>

<script>
export default {
    name: "FooterCustom",
};
</script>

<style scoped>
footer {
    text-align: center;
    padding: 30px;
    color: black;
    display: block;
}
a {
    max-width: 100%;
    max-height: 100%;
    text-decoration: none;
    text-align: center;
    margin: 10px;
    font-size: 18px;
    color: whitesmoke;
    padding: 5px;
}
</style>