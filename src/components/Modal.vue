<template lang="pug">
  .modal.fade(v-if='!!selectedCap' id='cap-modal' tabindex='-1' role='dialog' aria-labelledby='capModalLabel' aria-hidden='true')
    .modal-dialog.modal-dialog-centered(role='document')
      .modal-content
        .modal-header
        h5#capModalLabel.modal-title {{selectedCap.name}}
        button.close(type='button' data-dismiss='modal' aria-label='Close')
          span(aria-hidden='true') &times;
        .modal-body
        img.mw-100(:src="require('./../assets/images/' + selectedCap.image)" :alt='selectedCap.name')
        p {{selectedCap.country}}, {{selectedCap.town}}
        p {{selectedCap.pivzavod}}
        .alert.alert-danger(v-if="selectedCap.condition!='good'")
          | Cap condition: {{selectedCap.condition}}
        .alert.alert-success(v-else)
          | Cap condition: {{selectedCap.condition}}
        p.tags.badge.badge-primary {{selectedCap.tags}}
        p.links
          a(:href='selectedCap.pzlink' target='_blank') {{selectedCap.pzlink}}
        p.links
          a(:href='selectedCap.pzlink_alt' target='_blank') {{selectedCap.pzlink_alt}}
        p.links
          a(:href='selectedCap.ccilink' target='_blank') {{selectedCap.ccilink}}
        p.cap-position Position: {{selectedCap.position}}
        .modal-footer
        button.btn.btn-secondary(type='button' data-dismiss='modal') Close
</template>

<script>
export default {
  computed: {
    selectedCap() {
      const { openedCapModalId, capsData } = this.$store.state;

      const foundedCap = capsData.find((cap) => cap.id === openedCapModalId);
      console.log(foundedCap);
      return foundedCap;
    }
  }
};
</script>

<style lang="sass">

</style>
