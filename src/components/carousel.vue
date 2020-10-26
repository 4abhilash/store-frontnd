<template>
    <v-carousel :show-arrows="false"
    height="600"
    cycle>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'carousel',
  data () {
      return {
        items: [
          {
            src: 'https://wallpapercave.com/wp/wp3157182.jpg',
          },
          {
            src: 'https://wallpaperaccess.com/full/139155.jpg',
          },
          {
            src: 'https://mintfares.com/wp-content/uploads/2018/12/Mindfulness-Yoga.jpg',
          },
          {
            src: 'https://files.qatarliving.com/event/2016/11/12/Sunset%20Yoga.jpg',
          },
        ],
      }
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.myDiv6 {
  border: 2px outset blue;
  background-color: beige;
  text-align: center;
}
</style>