 <template>
  <div>
    <ul v-if="currencies">
        <li v-for="key in Object.keys(currencies)" :key="key">
            <span>{{ key }}</span>
            <!-- <span>{{ currencies[key].code }}</span> -->
            <p v-for="k in Object.keys(currencies[key])" :key="k">
              {{ currencies[key][k] }}
            </p>
            <!-- <span>{{USD}}</span> -->
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    currencies: [],
    
  }),

  // Fetches posts when the component is created.
  created() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        this.currencies = response.data.bpi;
      })
      .catch(e => {
        this.errors.push(e);
      });

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
};
</script>
