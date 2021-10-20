
<template>
    <div class="button">
        <button v-on:click="onClick">{{ text }}</button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        method: Function,
    },
    methods: {
        onClick() {
            console.log("clicked!");
        },
        onNotClick() {
            console.log("not clicked");
        },
    },
};
</script>

<style scoped>
button {
    font-size: 24px;
    border-radius: 15px;
    width: 10rem;
    height: 5rem;
    color: white;
    background-color: #1f1f1f;
}
</style>