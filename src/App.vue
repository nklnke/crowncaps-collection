<template lang="pug">
  #app.container-fluid

    header.navbar.navbar-expand.bg-primary.flex-column.flex-md-row.bd-navbar

      nav.navbar-nav-scroll
        ul.navbar-nav.bd-navbar-nav.flex-row
          li.nav-item
            img.logo(src="./assets/icons/logo.png" role="img" focusable="false")
          li.nav-item
            a.navbar-brand.text-light.btn.btn-primary(href='/') Collection of crowncaps
          li.nav-item
            a.nav-link.text-light.btn.btn-primary(href='/') Row
          a.nav-link.text-light.btn.btn-primary(href='/') List
          li.nav-item
          li.nav-item
            a.nav-link.text-light.btn.btn-primary(href='/') Show only bad
          li.nav-item
            a.nav-link.text-light.btn.btn-primary(href='/') Caps for exchange
          li.nav-item
            a.nav-link.text-light.btn.btn-primary(href='https://github.com/nklnke/crowncaps-collection' target='_blank') Github
          li.nav-item
            a#capsCounterBtn.nav-link.text-light.btn.btn-primary(href="" target="_blank")

      .navbar-nav.flex-row.ml-md-auto.d-md-flex
        form.form-inline.my-2.my-lg-0
          input.form-control(v-model="search" type="search" placeholder="Search" aria-label="Search")

    CountriesList

    .row(v-lazy-container="{selector:'img'}")
      .v-catalog-item.col-md-2(class='Все' v-for='cap in filterCapsArray' :key='cap.id' v-bind:class='cap.country' data-toggle='modal' data-target='#capModal')
        img.mw-100.cap-image(:data-src="require('../src/assets/images/' + cap.image)" :alt='cap.name')
        h5 {{cap.name}}
        p.cursive
          | {{cap.country}}, {{cap.town}}
        p {{cap.pivzavod}}
        .alert.alert-danger(v-if="cap.condition!='good'")
          | {{cap.condition}}
        p.tags.badge.badge-primary {{cap.tags | toLowerCase}}
        p.links
          a(v-if='cap.pzlink' :href='cap.pzlink' target='_blank')
            img.pzicon(:data-src="require('./assets/icons/factory.svg')" :alt='cap.pivzavod')
          a(v-if='cap.pzlink_alt' :href='cap.pzlink_alt' target='_blank')
            img.pzicon(:data-src="require('./assets/icons/factory.svg')" :alt='cap.pivzavod')
          a(v-if='cap.pzlink_another_alt' :href='cap.pzlink_another_alt' target='_blank')
            img.pzicon(:data-src="require('./assets/icons/factory.svg')" :alt='cap.pivzavod')
          a(v-if='cap.pzlink_super_alt' :href='cap.pzlink_super_alt' target='_blank')
            img.pzicon(:data-src="require('./assets/icons/factory.svg')" :alt='cap.pivzavod')
          a(v-if='cap.ccilink' :href='cap.ccilink' target='_blank')
            img.pzicon(:data-src="require('./assets/icons/cci.svg')" alt='CC.I link')

        //- <capModal />

        modal(name="modalSuka")
          | MODAL SUKA

        //- capModal window
        #capModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='capModalLabel' aria-hidden='true')
          .modal-dialog.modal-dialog-centered(role='document')
            .modal-content
              .modal-header
                h5#capModalLabel.modal-title {{cap.name}}
                button.close(type='button' data-dismiss='modal' aria-label='Close')
                  span(aria-hidden='true') &times;
              .modal-body
                img.mw-100(:data-src="require('../src/assets/images/' + cap.image)" :alt='cap.name')
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

    Footer

</template>

<script>
import { countryFilter } from "./modules/countryFilter.js";
import { allCapsCounter } from "./modules/allCapsCounter.js";
//- import { backToTop } from "./modules/backToTop.js";
//- import capModal from './components/cap-modal';
import CountriesList from "./components/CountriesList";
import Footer from "./components/Footer";

export default {
  name: "crowncaps-collection",
  components: {
    //- capModal
    CountriesList,
    Footer
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
    //- backToTop();
  },
  filters: {
    toLowerCase: function(str) {
      return str.toLowerCase();
    },
  },
  methods: {
    show() {
      this.$modal.show("modalSuka");
    },
    hide() {
      this.$modal.hide("modalSuka");
    }
  },
  mount() {
    this.show();
  }
};
</script>

<style lang="sass" scoped>
html
  scroll-behavior: smooth

#app
  font-family: Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-size: $font-size
  text-align: center
  line-height: 1.2

.btn-primary
  transition: 0s

.cursive
  font-style: italic
  font-size: 0.933333 * $font-size

.counter
  position: relative
  height: fit-content
  margin-top: 15px
  margin-left: -25px

a[href]:not([class])
  color: $blue
  text-decoration: underline

header
  ul
    display: flex
    flex-wrap: wrap
    justify-content: center

    li:not(:last-child)
      //- border-right: 1px solid $lightblue

.navbar-brand
  line-height: 28px

.logo
  height: 36px
  width: 36px

.nav-item
  &:hover
    cursor: pointer

  &:not(:last-child)
    margin-right: $margin/3

.container-fluid
  margin-left: 0
  margin-right: 0
  padding-left: 0
  padding-right: 0

.row
  justify-content: center
  margin-right: 0
  margin-left: 0
  margin-bottom: $margin * 2
  padding-right: $padding
  padding-left: $padding

.form-group
  margin: $margin * 2 $margin * 2 0

.v-catalog-item
  min-width: 150px
  max-width: 220px
  min-height: 200px
  padding: $padding
  margin: $margin * 2 $margin 0
  text-align: center

  border: 1px solid $lightgray
  border-radius: $radius

  &:hover
    cursor: help

    -webkit-box-shadow: 0px 0px 25px -10px rgba(158, 158, 158, 1)
    -moz-box-shadow: 0px 0px 25px -10px rgba(158, 158, 158, 1)
    box-shadow: 0px 0px 25px -10px rgba(158, 158, 158, 1)

    img
      filter: contrast(115%)

  .cap-image
    min-width: 100%
    margin-bottom: $margin

.tags
  white-space: normal

.links
  display: flex
  justify-content: center
  margin-bottom: 0

  a
    margin: $margin/4 $margin/2 0
    word-wrap: break-word

    &:first-child
      margin-bottom: $margin/4

    &:hover
      filter: blur(2px)

.cap-position
  margin-top: $margin

.pzicon
  max-height: 20px
</style>
