<template>
  <v-layout class="exchange-region" xs12 md12 column>
    <v-layout class="header">
      <v-flex md3 class="mt-3">
        <p class="white--text">{{type}}</p>
      </v-flex>
      <v-flex class="mt-3">
        <p class="white--text">Loading</p>
      </v-flex>
      <v-flex md3>
        <v-btn flat>
          <v-icon color="white">refresh</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md3>
        <p class="mt-4">TYPE</p>
      </v-flex>
      <v-flex md6 class="mt-2">
        <v-select :items="items" outline solo v-model="select"/>
      </v-flex>
      <v-flex md3/>
    </v-layout>
    <v-layout>
      <v-flex md3 class="mt-4">
        <p>Amount</p>
      </v-flex>
      <v-flex md6>
        <v-form class="mt-2">
          <v-text-field outline v-model="foo" :label="foo" single-line></v-text-field>
        </v-form>
      </v-flex>
      <v-flex md3 class="mt-4">
        <p class="text--center">N/A</p>
      </v-flex>
    </v-layout>
    <v-layout v-if="select === 'Limit Oder'">
      <v-flex md3 class="mt-4">
        <p>Price</p>
      </v-flex>
      <v-flex md6>
        <v-form class="mt-2">
          <v-text-field outline v-model="foo1" single-line :label="foo1"></v-text-field>
        </v-form>
      </v-flex>
      <v-flex md3 class="mt-4">
        <p>N/A</p>
      </v-flex>
    </v-layout>
    <v-layout class="exchange-region-fee">
      <v-flex class="mt-4" md3>
        <span>0,1%</span>
        <br>
        <v-tooltip top>
          <v-btn small flat color="grey" slot="activator">
            <v-icon small>info</v-icon>
          </v-btn>
          <span>Taker also pay a gas fee</span>
        </v-tooltip>
      </v-flex>
      <v-flex md6></v-flex>
      <v-flex md3 class="mt-4">
        <p>N/A</p>
      </v-flex>
    </v-layout>
    <v-layout v-if="select === 'Limit Oder'">
      <v-flex md3 class="mt-4">
        <p>Total</p>
      </v-flex>
      <v-flex md6>
        <v-form md6 class="mt-2">
          <v-text-field outline v-model="total" single-line :label="Total"></v-text-field>
        </v-form>
      </v-flex>
      <v-flex md3 class="mt-4">
        <p>N/A</p>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex md12>
        <v-btn color="success" class="btn">{{type}}</v-btn>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      items: ["Market Oder", "Limit Oder"],
      foo: 0,
      foo1: 0,
      select: "Limit Oder"
    };
  },
  computed: {
    total() {
      return this.foo * this.foo1;
    }
  }
};
</script>

<style scoped>
.exchange-region {
  border: 0.5px solid rgb(13, 13, 224);
  margin: 6px;
  text-align: center;
  align-self: flex-start;
}
.exchange-region-fee {
  opacity: 0.4;
}

.header {
  background-color: #1e678a;
}
</style>

