<template lang="pug">
  footer.footer.bg-secondary.fixed-bottom
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
      li
        #btnTop.fixed-action-btn.smooth-scroll(style='bottom: 45px; right: 24px; display: none;')
          a.btn-floating.btn-large.red(href='#topSection')
            i.fa.fa-arrow-up
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
footer
  padding: $padding

  font-size: 0.8rem
  color: white

  ul
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin: 0
    padding-left: 0

    list-style: none

    li
      margin: 0 $margin
</style>