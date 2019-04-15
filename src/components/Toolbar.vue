<template>
  <v-toolbar color="blue-grey-lighten-5">
    <v-flex>
      <v-img src="https://idex.market/assets/IDEX_sf-color.svg"/>
    </v-flex>
    <v-spacer></v-spacer>
    <v-layout class="header">
      <v-switch v-model="switch1" :label="theme"></v-switch>
      <p>ETH PRICE:LOADING
        <br>GAS PRICE:LOADING
      </p>
    </v-layout>
    <v-toolbar-items>
      <v-btn flat color="blue">TRADE</v-btn>
      <v-menu>
        <v-btn flat color="blue" slot="activator">
          <span>HELP</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="help in helps" :key="help.title">
            <v-list-tile-title>{{help.title}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu>
        <v-btn flat slot="activator" color="blue">
          <span>EN</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat color="blue">NEW WALLET</v-btn>
      <v-btn flat color="blue">UNLOCK WALLET</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "English" },
        { title: "Việt Nam" },
        { title: "Korea" },
        { title: "Japan" }
      ],
      helps: [
        { title: "Guides" },
        { title: "FAQ" },
        { title: "Aura Stacking" },
        { title: "Getting started" },
        { title: "Etherscan Contract" },
        { title: "Live help" }
      ],
      switch1: false
    };
  },
  computed: {
    theme() {
      return this.switch1 ? "night" : "day";
    }
  }
};
</script>
<style scoped>
.header {
  padding-top: 16px;
}
</style>
