<template>
  <div id="app" class="container-fluid">
    <header class="navbar navbar-expand bg-primary flex-column flex-md-row bd-navbar">

      <nav class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item">
            <img
              src="./assets/icons/logo.png"
              width="36px"
              height="36px"
              class="d-block"
              role="img"
              focusable="false">
          </li>
          <li class="nav-item">
            <a class="navbar-brand text-light btn btn-primary" href="/">Collection of crowncaps</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light btn btn-primary" href="/">Row</a>
          </li>
            <a class="nav-link text-light btn btn-primary" href="/">List</a>
          <li class="nav-item">
          </li>
          <li class="nav-item">
            <a class="nav-link text-light btn btn-primary" href="/">Show only bad</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light btn btn-primary" href="https://github.com/nklnke/crowncaps-collection" target="_blank">Github</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light btn btn-primary" href="" target="_blank" id="capsCounterBtn"></a>
          </li>
        </ul>
      </nav>

      <div class="navbar-nav flex-row ml-md-auto d-md-flex">
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="search"
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
        </form>
      </div>

    </header>

    <div class="countries-list">
      <!--
      <a class="list-inline-item">Германия <span class="badge badge-light">12</span></a>
      <a class="list-inline-item">Китай <span class="badge badge-light">2</span></a>
      // регуляркой отсечь всё, что после ` <`
      -->
      <a class="list-inline-item">Все</a><!-- <span class="badge badge-light counter">2</span> -->
      <a class="list-inline-item">Австрия</a>
      <a class="list-inline-item">Армения</a>
      <a class="list-inline-item">Бельгия</a>
      <a class="list-inline-item">Великобритания</a>
      <a class="list-inline-item">Германия</a>
      <a class="list-inline-item">Греция</a>
      <a class="list-inline-item">Грузия</a>
      <a class="list-inline-item">Дания</a>
      <a class="list-inline-item">Испания</a>
      <a class="list-inline-item">Казахстан</a>
      <a class="list-inline-item">Китай</a>
      <a class="list-inline-item">Латвия</a>
      <a class="list-inline-item">Мексика</a>
      <a class="list-inline-item">Нидерланды</a>
      <a class="list-inline-item">Польша</a>
      <a class="list-inline-item">Россия</a>
      <a class="list-inline-item">Румыния</a>
      <a class="list-inline-item">СССР</a>
      <a class="list-inline-item">США</a>
      <a class="list-inline-item">Таиланд</a>
      <a class="list-inline-item">Турция</a>
      <a class="list-inline-item">Украина</a>
      <a class="list-inline-item">Финляндия</a>
      <a class="list-inline-item">Хорватия</a>
      <a class="list-inline-item">Чехия</a>
      <a class="list-inline-item">Юж.Корея</a>
    </div>

    <div class="row">
      <div class="v-catalog-item col-md-2 Все"
           v-for="cap in filterCapsArray"
           :key="cap.id"
           :class="cap.country"
           data-toggle="modal"
           data-target="#capModal"
      >
        <img :src="require('../src/assets/images/' + cap.image)"
             :alt="cap.name"
             class="mw-100 cap-image"
        >
        <h5>{{cap.name}}</h5>
        <p class="cursive">
          {{cap.country}}<br>
          {{cap.town}}
        </p>
        <p>{{cap.pivzavod}}</p>
        <div v-if="cap.condition!='good'" class="alert alert-danger">
          {{cap.condition}}
        </div>
        <p class="tags badge badge-primary">{{cap.tags | toLowerCase}}</p>
        <p class="links">
          <a v-if="cap.pzlink" :href="cap.pzlink" target="_blank">
            <img src="./assets/icons/factory.svg" class="pzicon" :alt="cap.pivzavod">
          </a>
          <a v-if="cap.pzlink_alt" :href="cap.pzlink_alt" target="_blank">
            <img src="./assets/icons/factory.svg" class="pzicon" :alt="cap.pivzavod">
          </a>
          <a v-if="cap.pzlink_another_alt" :href="cap.pzlink_another_alt" target="_blank">
            <img src="./assets/icons/factory.svg" class="pzicon" :alt="cap.pivzavod">
          </a>
          <a v-if="cap.pzlink_super_alt" :href="cap.pzlink_super_alt" target="_blank">
            <img src="./assets/icons/factory.svg" class="pzicon" :alt="cap.pivzavod">
          </a>
          <a v-if="cap.ccilink" :href="cap.ccilink" target="_blank">
            <img src="./assets/icons/cci.svg" class="pzicon" alt="CC.I link">
          </a>
        </p>

        <!-- <capModal /> -->

        <!-- capModal window -->
        <div class="modal fade" id="capModal" tabindex="-1" role="dialog" aria-labelledby="capModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="capModalLabel">{{cap.name}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <img :src="require('../src/assets/images/' + cap.image)"
                     :alt="cap.name"
                     class="mw-100"
                >
                <p>{{cap.country}}, {{cap.town}}</p>
                <p>{{cap.pivzavod}}</p>
                <div v-if="cap.condition!='good'" class="alert alert-danger">
                  Cap condition: {{cap.condition}}
                </div>
                <div v-else class="alert alert-success">
                  Cap condition: {{cap.condition}}
                </div>
                <p class="tags badge badge-primary">{{cap.tags}}</p>
                <p class="links">
                  <a :href="cap.pzlink" target="_blank">{{cap.pzlink}}</a>
                  <a :href="cap.pzlink_alt" target="_blank">{{cap.pzlink_alt}}</a>
                  <a :href="cap.ccilink" target="_blank">{{cap.ccilink}}</a>
                </p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <!-- /capModal window -->

      </div>
    </div>

    <footer class="footer bg-secondary">
      <ul>
        <li><a class="text-white" href="https://github.com/nklnke/crowncaps-collection" target="_blank">github</a></li>
        <li>|</li>
        <li><a class="text-white" href="https://vuejs.org" target="_blank">vue.js</a></li>
        <li><a class="text-white" href="https://cli.vuejs.org/" target="_blank">vue-cli</a></li>
        <li><a class="text-white" href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
        <li><a class="text-white" href="https://getbootstrap.com" target="_blank">bootstrap</a></li>
        <li>|</li>
        <li><a class="text-white" href="https://nodejs.org" target="_blank">node.js</a></li>
        <li><a class="text-white" href="https://github.com/typicode/json-server" target="_blank">json-server</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import { countryFilter } from "./modules/countryFilter.js";
import { allCapsCounter } from "./modules/allCapsCounter.js";
// import capModal from './components/cap-modal';

export default {
  name: "crowncaps-collection",
  components: {
    // capModal
  },
  data() {
    return {
      search: "",
      caps: [],
    };
  },
  computed: {
    filterCapsArray() {
      return this.caps.filter(item =>
        item.name.toLowerCase().indexOf(this.search) !== -1 ||
        item.tags.toLowerCase().indexOf(this.search) !== -1 ||
        item.country.toLowerCase().indexOf(this.search) !== -1 ||
        item.town.toLowerCase().indexOf(this.search) !== -1 ||
        item.pivzavod.toLowerCase().indexOf(this.search) !== -1)
    }
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
    allCapsCounter();
  },
  filters: {
    toLowerCase: function(str) {
      return str.toLowerCase();
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: $font-size;
  text-align: center;
  line-height: 1.2;
}

.btn-primary {
  transition: 0s;
}

.cursive {
  font-style: italic;
  font-size: .933333*$font-size;
}

.counter {
  position: relative;
  height: fit-content;
  margin-top: 15px;
  margin-left: -25px;
}

a[href]:not([class]) {
  color: $blue;
  text-decoration: underline;
}

header {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li:not(:last-child) {
      // border-right: 1px solid $lightblue;
    }
  }
}

.nav-item {
  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-right: $margin/3;
  }
}

.nav-slash {
  color: white;
  padding: $padding/2 $padding/4 $padding/2 0;
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
    padding: $padding/1.5 $padding/1.15;
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
    cursor: help;

    -webkit-box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);
    -moz-box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);
    box-shadow: 0px 0px 25px -10px rgba(158,158,158,1);

    img {
      filter: contrast(115%);
    }
  }

  .cap-image {
    min-width: 100%;
    margin-bottom: $margin;
  }
}

.tags {
  white-space: normal;
}

.links {
  display: flex;
  justify-content: center;
  margin-bottom: 0;

  a {
    margin: $margin/4 $margin/2 0;
    word-wrap: break-word;

    &:first-child {
      margin-bottom: $margin/4;
    }

    &:hover {
      filter: blur(2px);
    }
  }
}

.pzicon {
  max-height: 20px;
}

footer {
  padding: $padding;

  font-size: .8rem;
  color: white;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding-left: 0;

    list-style: none;

    li {
      margin: 0 $margin;
    }
  }
}
</style>
