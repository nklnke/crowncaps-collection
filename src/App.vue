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
            <a class="navbar-brand text-light">Collection of crowncaps</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">List of all caps</a>
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
            class="form-control"
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
      <div class="v-catalog-item col-md-2 Все"
           v-for="cap in capsByTitle"
           :key="cap.id"
           :class="cap.country">
        <img v-bind:src="require('../src/assets/images/' + cap.image)"
             v-bind:alt="cap.name"
             class="mw-100">
        <h5>{{cap.name}}</h5>
        <p>{{cap.country}}, {{cap.town}}</p>
        <p>{{cap.pivzavod}}</p>
        <!-- <p>{{cap.condition}}</p> -->
        <p class="tags badge badge-primary">{{cap.tags}}</p>
        <p class="links">
          <a :href="cap.pzlink" target="_blank">{{cap.pzlink}}</a>
          <a :href="cap.ccilink" target="_blank">{{cap.ccilink}}</a>
        </p>
      </div>
    </div>

    <footer class="footer bg-secondary">
      <ul>
        <li><a class="text-white" href="https://vuejs.org" target="_blank">vue.js</a></li>
        <li><a class="text-white" href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
        <li><a class="text-white" href="https://getbootstrap.com" target="_blank">bootstrap</a></li>
        <li>|</li>
        <li><a class="text-white" href="https://nodejs.org" target="_blank">node.js</a></li>
        <li><a class="text-white" href="https://github.com/typicode/json-server" target="_blank">json-server</a></li>
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
  mounted() {
    countryFilter();
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 15px;
  text-align: center;
  line-height: 1.2;
}

.nav-item {
  margin-right: $margin/3;
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
    padding: $padding $padding*2;
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
  max-width: 220px;
  min-height: 200px;
  padding: $padding;
  margin: $margin*2 $margin 0; 
  text-align: center;

  border: 1px solid $lightgray;
  border-radius: $radius;

  &:hover {
    cursor: pointer;
    // transform: scale(1.015);

    -webkit-box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);
    -moz-box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);
    box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);

    img {
      filter: contrast(115%);
    }
  }

  p:last-child {
    font-size: .75em;
  }

  img {
    min-width: 100%;
    margin-bottom: $margin;
  }
}

.tags {
  // font-size: 0.75em;
  white-space: normal;
}

.links a {
  display: block;
  word-wrap: break-word;
}

footer {
  padding: $padding/2;

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
