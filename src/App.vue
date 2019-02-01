<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    {{routing}}
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    routing() {
      return this.$store.state.routing;
    }
  },
  methods: {doSomethingAwesome(val){
    alert(val);
  }},
  name: "App",
  props: {
    msg: String
  },
  watch: {
    routing(oldVal, newVal) {
      this.doSomethingAwesome();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
