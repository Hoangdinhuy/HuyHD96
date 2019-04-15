<template>
  <v-layout column class="main">
    <v-layout class="header">
      <v-flex>
        <p>{{text}}</p>
      </v-flex>
      <v-flex>
        <p>ToTal: Loading</p>
      </v-flex>
    </v-layout>
    <v-layout>
    <v-table class="s">
      <thead>
        <tr>
          <th>Price</th>
          <th>N/A</th>
          <th>N/A</th>
          <th>sum(N/A)</th>
        </tr>
      </thead>
    </v-table>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {};
  }
};
</script>

<style>
.main {
  border:1px solid blue;
  margin:6px;
}
th{
  height: 35px;
  min-width: 123px;
  display:table-cell;
  border:0.5px solid darkgray;
  width: 25%;
}
.s{
  overflow: auto;
  width: 100%;
}
.header {
  background-color: #1e678a;
  color: white;
}
</style>
