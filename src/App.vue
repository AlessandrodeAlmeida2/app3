<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="updateUser">
    Save user
  </button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
    }
  },
  methods: {
    updateUser() {
      const newUser = {
      first_name: 'Alessandro',
      last_name: 'Almeida',
      email: 'almeida@.com'
    }
    this.$store.commit('storeUser', newUser)
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
