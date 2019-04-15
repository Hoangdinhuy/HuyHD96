<template>
  <v-layout column md12 class="pb-3">
    <section> 
      <aside>
        <Mybalances md4/>
        <Updates md4/>
      </aside>
      <article>
        <v-layout row>
          <exchange-region md4 type="BUY"/>
          <exchange-region md4 type="SELL"/>
        </v-layout>
        <v-layout row>
          <Oderbook text="ASKS"/>
          <Oderbook text="BIDS"/>
        </v-layout>
        <v-layout row>
          <MyOpenOder/>
        </v-layout>
        <v-layout row>
        <Tradehistory/>
        </v-layout>
      </article>
    </section>
  </v-layout>
</template>

<script>
import ExchangeRegion from "./ExchangeRegion";
import Oderbook from "./Oderbook";
import Mybalances from "./Mybalances";
import MyOpenOder from "./MyOpenOder"
import Tradehistory from "./Tradehistory"
import Updates from "./Updates"
export default {
  name: "Main",
  components: {
    ExchangeRegion,
    Oderbook,
    Mybalances,
    MyOpenOder,
    Tradehistory,
    Updates,
  },

  data() {
    return {};
  }
};
</script>
<style scoped>
article {
  float:right;
  width: 70%;
  background-color: #f1f1f1;
}
aside{
  float: left;
  width: 30%;
  background-color: #f1f1f1;
}

</style>
