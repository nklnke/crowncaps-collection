<template>
  <div>
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
            <img v-bind:src="require('./../assets/images/' + cap.image)"
                v-bind:alt="cap.name"
                class="mw-100">
            <p>{{cap.country}}, {{cap.town}}</p>
            <p>{{cap.pivzavod}}</p>
            <div v-if="!cap.condition" class="alert alert-danger">BAD</div>
            <p class="tags badge badge-primary">{{cap.tags}}</p>
            <p class="links">
              <a :href="cap.pzlink" target="_blank">{{cap.pzlink}}</a>
              <a :href="cap.ccilink" target="_blank">{{cap.ccilink}}</a>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cap-modal",
  props: {},
  data() {
    return {};
  },
  computed: {}
};
</script>

<style>

</style>