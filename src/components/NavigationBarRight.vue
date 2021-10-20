<template>
    <div class="container-right">
        <img v-on:click="search" src="../assets/search-solid.svg" alt="" />
        <img v-on:click="notification" src="../assets/bell-solid.svg" alt="" />
        <img v-on:click="profile" src="../assets/user-solid.svg" alt="" />
    </div>
</template>

<script>
export default {
    name: "NavigationBarRight",
    methods: {
        search() {
            console.log('clicked to search button');
        },
        notification() {
            console.log('clicked to notification button');
        },
        profile() {
            console.log('clicked to profile button');
        }
    }
};
</script>

<style scoped>
.container-right {
    text-align: right;
    color: whitesmoke;
}
img {
    width: 20px !important;
    padding: 5px;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg)
        brightness(100%) contrast(100%);
}
</style>