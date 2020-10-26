<template>
    <v-container fluid fill-height class="description">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">Yoga Store</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">Since 2020</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Some interesting, funny, and ingenious designs for your yoga wardrobe.</div>
            <v-btn fab class="mt-5 brown">
            <v-icon large color="white">mdi-menu-down</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Description'
};
</script>

<style scoped>
.description {
    background: url('https://images.wallpapersden.com/image/download/man-yoga-sea_52762_2048x1152.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>