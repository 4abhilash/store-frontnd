<template>
<div>
  <LoginButton :msg="childData"/>
  <tabs/>
  <addToCart/>
  <NavigationLinks/>
</div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue'
import tabs from '../components/tabs.vue'
import NavigationLinks from '../components/NavigationLinks.vue'
export default {
  name: 'App',
  components: {
    LoginButton,
    tabs,
    NavigationLinks
    
  },
  data() {
   return {
     childData: []
   }
},
}
</script>