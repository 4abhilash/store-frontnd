<template>
<div>
  <LoginButton :msg="childData"/>
  <tabs/>
  <Description/>
  <NavigationLinks/> 
</div>
</template>

<script>
import LoginButton from '../components/LoginButton.vue'
import tabs from '../components/tabs.vue'
import Description from '../components/Description.vue'
import NavigationLinks from '../components/NavigationLinks.vue'
export default {
  name: 'aboutUs',
  components: {
    LoginButton,
    tabs,
    Description,
    NavigationLinks
    
  },
  data() {
   return {
     childData: []
   }
},
}
</script>