<!-- @format -->

<template>
  <div class="footer">
    <v-container fluid>
      <v-row>
        <div class="text-white built-by">
          Built with Vue.js
        </div>
        <div class="text-white current-date">
          {{ currentDate() }}
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.mdAndDown) return "width: 100%";
      return "width: 80%";
    },
  },
  data: () => ({}),
  methods: {
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    currentDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;
      return today;
    }
  },
};
</script>

<style scoped>
.footer {
  background-color: black;
}
.text-white {
  color: white;
}
.built-by {
  text-align: right;
  width: 100%;
  padding: 10px 30px;
}
.current-date {
  text-align: center;
  width: 100%;
  padding: 10px 30px;
  position: absolute;
}
</style>
