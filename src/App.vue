<template>
  <Navbar/>
  <router-view />
  <!-- <div class = "container">  
    <img class = "img-fluid" alt = "Vue logo" src = "./assets/logo.png" />
    <h1 class = "display-1 text-bold"> My App </h1>
    <h1 class = "text-gray-soft text-regular"> Greetings to you all. </h1>
    <HelloWorld msg = "Welcome to Your Vue.js App" />
  </div> -->
</template>

<script>
import Navbar from "@/views/Navbar.vue";

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: "Microsoft JhengHei","Arial Black", "Avenir", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.svg-icon {
  display: inline-flex;
  align-self: left;
}
</style>
