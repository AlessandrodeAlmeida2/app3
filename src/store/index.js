
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jhon',
      last_name: 'Snow',
      email: 'jhonsnow@.com'
    },
    products: [
      {
        id: 1,
        name: 'Bola',
        price: 100
      },
      {
        id: 2,
        name: 'Chuteira',
        price: 200
      },
      {
        id: 3,
        name: 'Meião',
        price: 50
      }
    ],
    cart: []
  },
  getters: {
    total(state) {
      return state.cart.reduce((total, item) => total += item.price, 0)
    }
  },
  mutations: {
    storeUser(state, data) {
      state.user = data;
      console.log('storeUser', data);
    },

    addProduct(state, data) {
      state.cart.push(data)
    },

    removeProduct(state, id) {
      const idx = state.cart.findIndex(o => o.id === id)
      state.cart.splice(idx, 1);
    }
  },
  actions: {
    // actions é necessária para usar promessas- operações assincronas
    storeUser(context, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          console.log('here');
          context.commit('storeUser', data);
          let total = context.getters.total;
          resolve(total);    
        }, 3000)
      })
    }    
  },
  modules: {
  }
})
