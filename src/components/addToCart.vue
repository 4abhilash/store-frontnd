<template>
<div>
<v-row width="100%">
        <v-col cols="12" md="3" justify-center v-for="product in CART" :key="product.productName">
            <img height="200px" width="230px" :src="product.productImage"/>
            <v-card-title><h1>{{product.productName}}</h1></v-card-title>
            <v-card-subtitle><p><h1>{{product.price}}</h1></v-card-subtitle>
            <v-card>
              <v-card-actions>
                <v-btn
                outlined
                text
                @click ="remove(product)">
                Remove
                </v-btn>
                <v-btn
                outlined
                rounded
                text
                color="orange">
                Checkout
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
</v-row>
<p></p>
<v-btn color= #c5c330 block rounded @click="addAddress()">
  <h1>Checkout</h1>
</v-btn>
<v-spacer></v-spacer>
<p></p>
<p></p>
</div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import Axios from 'axios';
import {mapGetters} from 'vuex';
Vue.use(axios)
export default {
  name: 'addToCart',
    data(){
        return{
        }
    },
    async mounted ()
    {
      this.$store.getters.CART
    },
    computed : {
    ...mapGetters(['CART'])
  },
    methods : {
        remove(product){
            this.cart.splice(this.cart.indexOf(cart), 1);
            alert("Product added to Cart")
            alert(JSON.stringify(this.cart))
        },
        addAddress(){
            this.$router.push({name:'Checkout'})
        },
    }
}
</script>

<style>
/* div {
  width: 100%;
  height: 300px;
  background-color: #686d76;
  border: 3px #19d3da
}*/
</style>