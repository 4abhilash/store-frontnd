<template>
<div>
  <LoginButton :msg="childData"/>
  <tabs/>
   <carousel/>
  <photocard @cartData="updateCart"/>
  <pagination/>
  <NavigationLinks/>
</div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue'
import tabs from '../components/tabs.vue'
import carousel from '../components/carousel.vue'
import photocard from '../components/photocard.vue'
import pagination from '../components/pagination.vue'
import NavigationLinks from '../components/NavigationLinks.vue'
export default {
  name: 'App',
  components: {
    LoginButton,
    tabs,
    carousel,
    photocard,
    pagination,
    NavigationLinks
    
  },
  data() {
   return {
     childData: []
   }
 },
 methods: {
    updateCart(variable) {
      this.childData= variable;
    }
  }
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
</style>