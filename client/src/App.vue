<!-- @format -->

<template>
  <v-app class="overflow-hidden">
    <v-container v-if="loading" class="spin-container">
      <semipolar-spinner
        :animation-duration="3000"
        :size="160"
        :color="'#ff1d5e'"
      />
    </v-container>
    <template v-if="!loading">
      <Navbar />
      <v-sheet
        id="main-panel" 
        class="overflow-y-auto"
        height="800"
      >
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-sheet>
      <Footer />
    </template>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { SemipolarSpinner  } from 'epic-spinners'

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    SemipolarSpinner
  },
  data: () => ({
    loading: true
  }),
  created() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
};
</script>

<style>
.spin-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
