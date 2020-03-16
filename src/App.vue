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
          v-model="search"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search">
      </form>
    </header>

    <form action="">
      <div class="form-group">
        <select class="form-control" id="">
          <option>latest</option>
          <option>by country</option>
          <option>by condition</option>
        </select>
      </div>
    </form>

    <div class="row">
      <div v-for="cap in capsByTitle" :key="cap.article" class="v-catalog-item col-md-2">
        <img
          v-bind:src="require('../src/assets/images/' + cap.image)"
          v-bind:alt="cap.name"
          class="mw-100">
        <p>{{ cap.pivzavod }}, {{ cap.country }}</p>
        <p>{{ cap.description }}</p>
        <p>{{ cap.condition }}</p>
        <p>
          <!-- v-for <a href="">{{ cap.tags }}</a> -->
          {{ cap.tags }}
        </p>
      </div>
    </div>

    <footer class="footer bg-secondary">
      <ul>
        <li>vue.js</li>
        <li>vuex</li>
        <li>bootstrap</li>
        <li>|</li>
        <li>express.js</li>
        <li>node.js</li>
        <li>mongodb</li>
      </ul>
    </footer>
  </div>
</template>

<script>
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
    text-decoration: underline;
  }
}
footer {
  padding: $margin;

  font-size: .8em;
  color: white;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;

    list-style: none;

    li {
      margin: 0 $padding;
    }
  }
}
</style>
