<template>
  <v-layout class="main" xs12 md6 column>
    <v-layout class="header">
      <p>My Open Oder</p>
    </v-layout>
    <v-table class="s">
      <thead>
        <tr>
          <th>Type</th>
          <th>Price</th>
          <th>Amount(N/A)</th>
          <th>Total(N/A)</th>
          <th>Date</th>
          <th>Action</th>
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
  min-width: 150px;
  display: table-cell;
  border: 0.5px solid darkgray;
  height:35px;
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


