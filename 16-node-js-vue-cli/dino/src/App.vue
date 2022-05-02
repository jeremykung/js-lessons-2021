<template>
  <MyDiv />
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <MyDiv />
  <ColorBox />
  <MyDiv />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyDiv from './components/MyDiv.vue'
import ColorBox from './components/ColorBox.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyDiv,
    ColorBox,
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
