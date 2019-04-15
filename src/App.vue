<template>
  <v-app id="inspire">
    <toolbar/>
    <Title/>
    <v-container>
      <Main/>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Main from "./components/Main";
import Title from "./components/Title";
import Footer from "./components/Footer"
export default {
  name: "App",
  components: {
    Main,
    Toolbar,
    Title,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1580eb;
  margin-top: 60px;
}
.container {
  padding: 0;
  width: 100%;
}
</style>


