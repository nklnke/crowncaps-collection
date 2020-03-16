<template>
  <div id="app" class="container-fluid">
    <header class="navbar navbar-expand bg-primary flex-column flex-md-row bd-navbar">
      <div class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav flex-row">
          <li class="nav-item">
            <img
              src="./assets/images/1.jpg"
              width="36"
              height="36"
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
            <a class="nav-link text-light" href="/">#####</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">#####</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/">Contacts</a>
          </li>
        </ul>
      </div>

      <ul class="navbar-nav flex-row ml-md-auto d-md-flex"> <!-- "d-none" class to hide element in low resolutions -->
        <li class="nav-item dropdown">
          <a class="nav-item nav-link dropdown-toggle mr-md-2 text-light" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Exchange <span class="badge badge-warning">5 pcs</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right">
            <!-- <vExchange v-if="CART.length /> -->

            <a class="dropdown-item" href="#">cap 1</a>
            <a class="dropdown-item" href="#">cap 2</a>
            <a class="dropdown-item" href="#">cap 3</a>
            <a class="dropdown-item" href="#">cap 4</a>
            <a class="dropdown-item" href="#">cap 5</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item active" href="#">Exchange</a>
          </div>
        </li>
      </ul>

      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search">
        <!-- <button class="btn btn-outline-success my-2 my-sm-0 text-light" type="submit">Search</button> -->
      </form>
    </header>

    <div class="row">
      <div v-for="cap in capsByTitle" :key="cap.article" class="v-catalog-item col-md-2">
        <img
          v-bind:src="require('../src/assets/images/' + cap.image)"
          v-bind:alt="cap.name"
        >
        <h5>{{ cap.name }}</h5>
        <p>{{ cap.description }}</p>
        <p>{{ cap.tags }}</p>
        <p>{{ cap.condition }}</p>
        <p>{{ cap.country }}</p>
        <p>{{ cap.pivzavod }}</p>

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
      search: "",
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

.container-fluid {
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;
}

.row {
  justify-content: space-evenly;
}

.v-catalog-item {
  min-width: 140px;
  min-height: 140px;
  text-align: center;
  padding: $padding;
  margin: $margin $margin $margin; 



  border: 1px solid $lightgray;
  border-radius: $radius;

  img {
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
