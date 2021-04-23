<!-- @format -->

<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        Zahar Rublev
      </h1>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab href="#tab-experience">Experience</v-tab>
      <v-tab href="#tab-education">Education</v-tab>
      <v-tab href="#tab-demo">Demo</v-tab>
      <v-tab href="#tab-RPS">RPS game</v-tab>
      <v-tab href="#tab-TTT">TTT game</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item :value="'tab-experience'">
        <v-card color="basil" flat>
          <Experiences />
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-education'">
        <v-card color="basil" flat>
          <Educations />
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-demo'">
        <v-card color="basil" flat>
          <RandomNumber />
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-RPS'">
        <v-card color="basil" flat>
          <RPS />
        </v-card>
      </v-tab-item>
      <v-tab-item :value="'tab-TTT'">
        <v-card color="basil" flat>
          <Board />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Educations from '../components/Educations'
import Experiences from '../components/Experiences'
import RandomNumber from '../components/RandomNumber'
import RPS from '../components/RPS'
import Board from '../components/TTT/Board'

export default {
  name: 'Home',
  components: {
    Educations,
    Experiences,
    RandomNumber,
    RPS,
    Board,
  },
  data: () => ({
    tab: null,
    items: [
      'Experience',
      'Education',
      'Demo',
      'Rock-Paper-Scissors',
      'Tic Tac Toe',
    ],
  }),
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.mdAndDown) return 'width: 100%'
      return 'width: 95%'
    },
  },
  methods: {
    goToLink(link) {
      this.$router.push(`${link}`).catch(() => {})
    },
  },
}
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
