<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
  <header-app ref="header" />
  <h1>Hello NgoManhSon</h1>
  <button @click="onChange">Change me</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderApp: Header,
  },
  // data() {},
  methods: {
    onChange() {
      console.log("Hello World");
      console.log(this.$refs.hello);
      this.$refs.hello.onConsoleTesting();
      this.$refs.header;
      console.log(this.$refs.header);
    },
  },
};
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
