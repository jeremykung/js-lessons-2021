// HTML
<template>
  <Instructions />
  <h1>My title</h1>
  <p>{{ myName }}</p>
  <Instructions />
  <img alt="Vue logo" src="./assets/logo.png">
  <Instructions />
</template>

// JS
<script>
import Instructions from './components/Instructions.vue'

export default {
  name: 'App',
  components: {
    Instructions,
  },
  data() {
    return {
      myName: "Sam",
    }
  }
}
</script>

// CSS
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
