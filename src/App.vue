<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/todos">Index</router-link>
    <!-- <router-link name="Index">Index</router-link> -->
    <router-link to="/new">New</router-link>
    <router-view />
  </div>
</template>

  

<script>
import Home from "./components/home.vue";
import New from "./components/new.vue";
import Index from "./components/index.vue";

export default {
  name: "App",
  components: {
    Home,
    New,
    Index,
  },
  mounted() {
    this.$store.dispatch("fetchTodos");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 2px, 3px, 7px, 3px;
  padding-right: 2px;
}
</style>
