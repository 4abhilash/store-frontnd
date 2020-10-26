<template>
   <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title><h1>Yoga Store</h1></v-toolbar-title>

      <v-spacer></v-spacer>

       <v-text-field
        hide-details
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn
             rounded
             color="secondary"
             dark
             >
             Login
      </v-btn>

      <v-btn icon @click="goToCart()">
      <v-badge
        :content="msg.length"
        color="red"
        overlap
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'LoginButton',
  data: () => ({
        number:0,
        show:false,
    }),
     props: {
    msg: {
      type: Array
    },
    watch: {
    msg: function() {
      this.number(this.msg.length);
    }
    }
    },
    methods: {
      goToCart() {
           this.$router.push({name:'cart'})


    }
},
}

    
</script>

