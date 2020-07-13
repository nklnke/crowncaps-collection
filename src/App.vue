<template lang="pug">
  #app.container-fluid

    header.navbar.navbar-expand.bg-primary.flex-column.flex-md-row.bd-navbar

      nav.navbar-nav-scroll
        ul.navbar-nav.bd-navbar-nav.flex-row
          li.nav-item
            img.d-block(src='./assets/icons/logo.png' width='36px' height='36px' role='img' focusable='false')
          li.nav-item
            a.navbar-brand.text-light.btn.btn-primary(href='/') Collection of crowncaps
          li.nav-item
            a.nav-link.text-light.btn.btn-primary(href='/') Row
          a.nav-link.text-light.btn.btn-primary(href='/') List
          li.nav-item
          li.nav-item
            a.nav-link.text-light.btn.btn-primary(href='/') Show only bad
          li.nav-item
            a.nav-link.text-light.btn.btn-primary(href='https://github.com/nklnke/crowncaps-collection' target='_blank') Github
          li.nav-item
            a#capsCounterBtn.nav-link.text-light.btn.btn-primary(href='' target='_blank')

      .navbar-nav.flex-row.ml-md-auto.d-md-flex
        form.form-inline.my-2.my-lg-0
          input.form-control(v-model='search' type='search' placeholder='Search' aria-label='Search')

    .countries-list
      //-
        <a class="list-inline-item">Германия <span class="badge badge-light">12</span></a>
        <a class="list-inline-item">Китай <span class="badge badge-light">2</span></a>
        регуляркой отсечь всё, что после ` <`
      a.list-inline-item Все
      //- <span class="badge badge-light counter">2</span>
      a.list-inline-item Австрия
      a.list-inline-item Армения
      a.list-inline-item Бельгия
      a.list-inline-item Великобритания
      a.list-inline-item Германия
      a.list-inline-item Греция
      a.list-inline-item Грузия
      a.list-inline-item Дания
      a.list-inline-item Испания
      a.list-inline-item Италия
      a.list-inline-item Казахстан
      a.list-inline-item Китай
      a.list-inline-item Латвия
      a.list-inline-item Мексика  
      a.list-inline-item Нидерланды
      a.list-inline-item Польша
      a.list-inline-item Россия
      a.list-inline-item Румыния
      a.list-inline-item СССР
      a.list-inline-item США
      a.list-inline-item Таиланд
      a.list-inline-item Турция
      a.list-inline-item Украина
      a.list-inline-item Финляндия
      a.list-inline-item Франция
      a.list-inline-item Хорватия
      a.list-inline-item Чехия
      a.list-inline-item Юж.Корея
      a.list-inline-item N/A

    .row
      .v-catalog-item.col-md-2(class='Все' v-for='cap in filterCapsArray' :key='cap.id' v-bind:class='cap.country' data-toggle='modal' data-target='#capModal')
        img.mw-100.cap-image(:src="require('../src/assets/images/' + cap.image)" :alt='cap.name')
        h5 {{cap.name}}
        p.cursive
          | {{cap.country}}, {{cap.town}}
        p {{cap.pivzavod}}
        .alert.alert-danger(v-if="cap.condition!='good'")
          | {{cap.condition}}
        p.tags.badge.badge-primary {{cap.tags | toLowerCase}}
        p.links
          a(v-if='cap.pzlink' :href='cap.pzlink' target='_blank')
            img.pzicon(src='./assets/icons/factory.svg' :alt='cap.pivzavod')
          a(v-if='cap.pzlink_alt' :href='cap.pzlink_alt' target='_blank')
            img.pzicon(src='./assets/icons/factory.svg' :alt='cap.pivzavod')
          a(v-if='cap.pzlink_another_alt' :href='cap.pzlink_another_alt' target='_blank')
            img.pzicon(src='./assets/icons/factory.svg' :alt='cap.pivzavod')
          a(v-if='cap.pzlink_super_alt' :href='cap.pzlink_super_alt' target='_blank')
            img.pzicon(src='./assets/icons/factory.svg' :alt='cap.pivzavod')
          a(v-if='cap.ccilink' :href='cap.ccilink' target='_blank')
            img.pzicon(src='./assets/icons/cci.svg' alt='CC.I link')

        //- <capModal />

        //- capModal window
        #capModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='capModalLabel' aria-hidden='true')
          .modal-dialog.modal-dialog-centered(role='document')
            .modal-content
              .modal-header
                h5#capModalLabel.modal-title {{cap.name}}
                button.close(type='button' data-dismiss='modal' aria-label='Close')
                  span(aria-hidden='true') &times;
              .modal-body
                img.mw-100(:src="require('../src/assets/images/' + cap.image)" :alt='cap.name')
                p {{cap.country}}, {{cap.town}}
                p {{cap.pivzavod}}
                .alert.alert-danger(v-if="cap.condition!='good'")
                  | Cap condition: {{cap.condition}}
                .alert.alert-success(v-else)
                  | Cap condition: {{cap.condition}}
                p.tags.badge.badge-primary {{cap.tags}}
                p.links
                  a(:href='cap.pzlink' target='_blank') {{cap.pzlink}}
                p.links
                  a(:href='cap.pzlink_alt' target='_blank') {{cap.pzlink_alt}}
                p.links
                  a(:href='cap.ccilink' target='_blank') {{cap.ccilink}}
                p.cap-position Position: {{cap.position}}
              .modal-footer
                button.btn.btn-secondary(type='button' data-dismiss='modal') Close

    footer.footer.bg-secondary
      ul
        li
          a.text-white(href='https://github.com/nklnke/crowncaps-collection' target='_blank') github
        li |
        li
          a.text-white(href='https://vuejs.org' target='_blank') vue.js
        li
          a.text-white(href='https://cli.vuejs.org/' target='_blank') vue-cli
        li
          a.text-white(href='https://vuex.vuejs.org' target='_blank') vuex
        li
          a.text-white(href='https://getbootstrap.com' target='_blank') bootstrap
        li |
        li
          a.text-white(href='https://nodejs.org' target='_blank') node.js
        li
          a.text-white(href='https://github.com/typicode/json-server' target='_blank') json-server
</template>

<script>
import { countryFilter } from "./modules/countryFilter.js";
import { allCapsCounter } from "./modules/allCapsCounter.js";
//- import capModal from './components/cap-modal';

export default {
  name: "crowncaps-collection",
  components: {
    //- capModal
  },
  data() {
    return {
      search: "",
      caps: [],
    };
  },
  computed: {
    filterCapsArray() {
      return this.caps.filter(
        (item) =>
          item.name.toLowerCase().indexOf(this.search) !== -1 ||
          item.tags.toLowerCase().indexOf(this.search) !== -1 ||
          item.country.toLowerCase().indexOf(this.search) !== -1 ||
          item.town.toLowerCase().indexOf(this.search) !== -1 ||
          item.pivzavod.toLowerCase().indexOf(this.search) !== -1
      );
    },
  },
  beforeMount() {
    fetch("http://localhost:3000/caps")
      .then((response) => response.json())
      .then((json) => {
        this.caps = json;
      });
  },
  mounted() {
    countryFilter();
    allCapsCounter();
  },
  filters: {
    toLowerCase: function(str) {
      return str.toLowerCase();
    },
  },
  methods: {},
};
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
  font-size: 0.933333 * $font-size;
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

.navbar-brand {
  line-height: 28px;
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
  margin-bottom: $margin * 2;
  padding-right: $padding;
  padding-left: $padding;
}

.form-group {
  margin: $margin * 2 $margin * 2 0;
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
  margin: $margin * 2 $margin 0;
  text-align: center;

  border: 1px solid $lightgray;
  border-radius: $radius;

  &:hover {
    cursor: help;

    -webkit-box-shadow: 0px 0px 25px -10px rgba(158, 158, 158, 1);
    -moz-box-shadow: 0px 0px 25px -10px rgba(158, 158, 158, 1);
    box-shadow: 0px 0px 25px -10px rgba(158, 158, 158, 1);

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

.cap-position {
  margin-top: $margin;
}

.pzicon {
  max-height: 20px;
}

footer {
  padding: $padding;

  font-size: 0.8rem;
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
