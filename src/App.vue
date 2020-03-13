<template>
  <div id="app">
    <input type="text" v-model="search">

    <div class="row">
      <div v-for="cap in capsByTitle" :key="cap.article" class="cap">
        <img
          class="v-catalog-item__image"
          v-bind:src="require('../src/assets/images/' + cap.image)"
          v-bind:alt="cap.name"
        >
        <h5>{{ cap.name }}</h5>
        <p>{{ cap.description }}</p>
        <p>{{ cap.tags }}</p>
        <p>{{ cap.condition }}</p>
        <p>{{ cap.country }}</p>
        <p>{{ cap.pivzavod }}</p>
        <p>
          exchange status: <b>{{ cap.exchange_status }}</b>
        </p>

        <button
          v-if="cap.exchange_status == true">
          Exchange
        </button>
        <button v-else>
          No exchange
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      search: '',
      caps: [],
    };
  },
  computed: {
    capsByTitle() {
      return this.caps.filter(item =>
        item.name.toLowerCase().indexOf(this.search) !== -1 ||
        item.description.toLowerCase().indexOf(this.search) !== -1 ||
        item.tags.toLowerCase().indexOf(this.search) !== -1 ||
        item.condition.toLowerCase().indexOf(this.search) !== -1 ||
        item.country.toLowerCase().indexOf(this.search) !== -1 ||
        item.pivzavod.toLowerCase().indexOf(this.search) !== -1)
    },
  },
  beforeMount() {
    fetch('http://localhost:3000/caps')
      .then(response => response.json())
      .then(json => {
        this.caps = json;
      })
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

div {
  border: 1px solid red;

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
  }

  .cap {
    max-width: 250px;
  }
}

img {
  max-height: 50px;
}
</style>
