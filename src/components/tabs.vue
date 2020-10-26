<template>
<v-tabs
grow>
    <v-tab @click="allProducts()">All Products</v-tab>
    <v-tab @click="about()">About us</v-tab>
  </v-tabs>
  
</template>

<script>
export default {
  name: 'tabs',
  methods: {
      allProducts() {
           this.$router.push({name:'home'})


    },
    about(){
            this.$router.push({name:'aboutUs'})

    }
},
};
</script>

