<template>
<div>
<v-row width="100%">
        <v-col cols="12" md="3" justify-center v-for="product in CART" :key="product.productName">
            <img height="200px" width="230px" :src="product.productImage"/>
            <v-card-title><h1>{{product.productName}}</h1></v-card-title>
            <v-card-subtitle><p><h1>{{product.price}}</h1></v-card-subtitle>
            <v-card>
              <v-card-actions>
              </v-card-actions>
            </v-card>
        </v-col>
</v-row>
<p></p>
<p></p>

<table id="firstTable">
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in CART" :key="product.productName">
      <td>{{product.productName}}</td>
      <td>{{product.price}}</td>
    </tr>
    <tr>
        <td><strong>Total</strong></td>
        <td>{{}}</td>
    </tr>
  </tbody>
</table>
<p></p>
<p></p>

</div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'Order',
    data(){
        return{
            total:0
        }
    },
    // computed:{
    //     getProductTotalPrice: function () {
    //         let
    // },
    async mounted ()
    {
      this.$store.getters.CART
    },
    computed : {
    ...mapGetters(['CART'])
  },
    
}
</script>
<style>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}
table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}
table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
</style>