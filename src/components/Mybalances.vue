<template>
  <v-layout class="main" xs12 md6 column>
    <v-layout class="header">
      <p>MY BALANCES</p>
    </v-layout>
    <v-table class="s">
      <thead>
        <tr>
          <th>Coin</th>
          <th>Available</th>
          <th>In Open Oder</th>
        </tr>
      </thead>
    </v-table>
  </v-layout>
</template>

<style scoped>
.main {
  border: 1px solid blue;
  margin: 6px;
  align-self:flex-start;
  
}
th {
  height: 35px;
  min-width: 120px;
  display: table-cell;
  border: 0.5px solid darkgray;
}
.s {
  overflow: auto;
  text-align: left;
}
.header {
  background-color: #1e678a;
  color: white;
}
</style>

