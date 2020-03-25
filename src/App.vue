<template>
  <div id="app" class="container-fluid">
    <header class="navbar navbar-expand bg-primary flex-column flex-md-row bd-navbar">

      <div class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item">
            <img
              src="./assets/images/1.jpg"
              width="36px"
              height="36px"
              class="d-block"
              role="img"
              focusable="false">
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">Collection</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">Contacts</a>
          </li>
        </ul>
      </div>

      <ul class="navbar-nav flex-row ml-md-auto d-md-flex">
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="search"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search">
        </form>
      </ul>

    </header>

    <div class="countries-list">
      <!--
      <a class="list-inline-item">Германия <span class="badge badge-light">12</span></a>
      <a class="list-inline-item">Китай <span class="badge badge-light">2</span></a>
      -->
      <a class="list-inline-item">Все</a>
      <a class="list-inline-item">Германия</a>
      <a class="list-inline-item">Китай</a>
      <a class="list-inline-item">Россия</a>
      <a class="list-inline-item">США</a>
      <a class="list-inline-item">Украина</a>
      <a class="list-inline-item">Чехия</a>
      <a class="list-inline-item">Южная Корея</a>
    </div>

    <div class="row">
      <div v-for="cap in capsByTitle"
           :key="cap.id"
           class="v-catalog-item col-md-2 Все"
           :class="cap.country">
        <img v-bind:src="require('../src/assets/images/' + cap.image)"
             v-bind:alt="cap.name"
             class="mw-100">
        <h3>{{cap.name}}</h3>
        <p>{{cap.pivzavod}}, {{cap.country}}</p>
        <p>{{cap.description}}</p>
        <p>{{cap.condition}}</p>
        <p>{{cap.tags}}</p>
      </div>
    </div>

    <footer class="footer bg-secondary">
      <ul>
        <li>vue.js</li>
        <li>vuex</li>
        <li>bootstrap</li>
        <li>|</li>
        <li>node.js</li>
        <!-- <li>express.js</li>
        <li>mongodb</li> -->
      </ul>
    </footer>
  </div>
</template>

<script>
import { countryFilter } from "./countryFilter.js";

export default {
  name: "crowncaps-collection",
  components: {},
  data() {
    return {
      search: "",
      caps: [],
    };
  },
  computed: {
    capsByTitle() {
      return this.caps.filter(item =>
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
  },
  methods: {
    filterBy(option) {
      this.filter = option;
    }
  },
  mounted() {
    countryFilter();
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container-fluid {
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}

.row {
  justify-content: center;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: $margin*2;
  padding-right: $padding;
  padding-left: $padding;
}

.form-group {
  margin: $margin*2 $margin*2 0;
}

.countries-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  background: $lightblue;
  
  a {
    padding: $padding*2 $padding*2;
    margin: 0;
    color: white;
    cursor: pointer;

    &:hover {
      color: white;
      background-color: $blue;
      text-decoration: none;
    }
  }
}

.v-catalog-item {
  min-width: 150px;
  padding: $padding;
  margin: $margin*2 $margin 0; 
  text-align: center;

  border: 1px solid $lightgray;
  border-radius: $radius;

  &:hover {
    cursor: pointer;

    -webkit-box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);
    -moz-box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);
    box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);
  }

  p:last-child {
    font-size: .75em;
  }
}

footer {
  padding: $padding;

  font-size: .8em;
  color: white;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;

    list-style: none;

    li {
      margin: 0 $margin;
    }
  }
}
</style>
