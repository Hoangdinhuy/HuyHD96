<template>
  <v-layout column class="main">
    <v-layout class="s1">
      <p>TRADE HISTOTY</p>
    </v-layout>
    <v-layout> 
      <v-table class="s">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Price(ETH)</th>
            <th>Amount(AURA)</th>
            <th>Total(ETH)</th>
          </tr>
        </thead>
      </v-table>
    </v-layout>
  </v-layout>
</template>

<style scoped>
.s{
  overflow: auto;
  width: 100%;
}
.s1{
  background-color: #1e678a;
  justify-content: right;
  color: white;
}
th {
  height: 35px;
  width:20%;
  display: table-cell;
  border: 0.5px solid darkgray;
  min-width: 122px;
}
.main{
  border: 1px solid blue;
  margin:6px;
}
</style>
