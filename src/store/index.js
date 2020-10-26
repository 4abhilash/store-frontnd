import Vue from 'vue'
import VueX from 'vuex'
//import Axios from 'axios';
import axios from 'axios';


Vue.use(axios)
Vue.use(VueX)

export const store = new VueX.Store({
    state:  {
                cards:[],
                cart:[]
    },
    getters : {
        CARDS:  state => {
                return state.cards
        },
        CART:   state  => {
                return state.cart
        }
    },
    
  mutations: {
    SET_PRODUCTS : (state,payload) => {
        state.cards = payload
        
    },
    ADD_TOCART : (state,payload) => {
        state.cart.push(payload)
        alert(JSON.stringify(state.cart))
      },
  },
    actions : {
        GET_PRODUCTS : async(context) => {
            let {data} = await axios.get(
                "http://localhost:5000/api/v1/product/show"
              );
            context.commit("SET_PRODUCTS",data)
        }
    }
    })