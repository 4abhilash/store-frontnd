<template>
  <v-card
    grow
    class="mx-auto"
    max-width = "auto"
  >

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.productName"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.productImage"
              contain
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400"
              width = "auto"
            >
              
            </v-img>

            <v-card-actions>
            <v-card-title><h3>{{card.productName}}</h3></v-card-title>
            <v-card-title><h3>{{card.price}}</h3></v-card-title>
              <v-spacer></v-spacer>

              <v-btn icon @click="update(card)">
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon @click="add(card)">
                <v-icon>mdi-cart</v-icon>
              </v-btn>
              
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  

</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'photocard',
 data: () => ({
      counter:0,
      cart:[ ],
      wishlist:[],
      cards: [],

    }),
    async mounted() {
        this.$store.dispatch("GET_PRODUCTS")
  },
  computed : {
              ...mapGetters(['CARDS'])
      },
      methods: {
      add(card) {
      this.cart.push(card)
      alert(JSON.stringify(this.cart))
      this.counter+=1
      this.$emit("cartData",this.cart);
    },
    update(card) {
      this.wishlist.push(card)
      alert(JSON.stringify(this.wishlist))
    },
  }
};
</script>

<style>
img {
  max-width: 100%;
  height: auto;
}
</style>