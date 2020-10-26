<template>
<div>
    <div>
        <LoginButton :msg="childData"/>
    </div>
    <div>
        <Description/>
    </div>
    <div>
        <Order/>
    </div>
    <div>
        <NavigationLinks/>
    </div>
</div>
</template>
<script>
import LoginButton from '../components/LoginButton.vue'
import Description from '../components/Description.vue'
import order from '../components/order.vue'
import NavigationLinks from '../components/NavigationLinks.vue'
export default {
  name: 'Home',
  components: {
    LoginButton, Description, order, NavigationLinks
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
</style>