<!-- @format -->

<template>
  <v-container class="navbar-container">
    <v-app-bar 
      absolute
      color="#6A76AB"
      dark
      dense
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#main-panel"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-img
          alt="Zahar Rublev"
          class="shrink mr-15 pointer"
          contain
          :src="require('@/assets/photo.jpeg')"
          transition="scale-transition"
          width="100"
          @click="goToHome"
      />
      <v-toolbar-title>Zahar Rublev</v-toolbar-title>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  computed: {
    isMobileForNav() {
      if (this.$vuetify.breakpoint.mdAndDown) return true;
      return false;
    },
    isMobile() {
      if (this.$vuetify.breakpoint.mdAndDown) return "width: 100%";
      return "width: 80%";
    },
  },
  data: () => ({
    drawer: false,
  }),
  methods: {
    goToHome() {
      this.$router.push("/").catch(() => {});
    },
    goToLink(link) {
      this.$router.push(`${link}`).catch(() => {});
    },
  },
};
</script>

<style scoped>
.navbar-container {
  height: 130px;
}
.pointer {
  cursor: pointer;
}
</style>
