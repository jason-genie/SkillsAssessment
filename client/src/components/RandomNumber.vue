<!-- @format -->

<template>
  <v-container fluid>
    <v-card
      elevation="2"
      outlined
      shaped
    >
    <v-card-title>Random number from server</v-card-title>
    <v-space></v-space>
    <v-card-subtitle class="font-weight-black">{{ randomNum }}</v-card-subtitle>
    <v-space></v-space>
    <v-card-actions>
      <v-btn color="primary" @click="getRandomNumber()">
        Get another one
      </v-btn>
    </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      randomNum: "common/randomNum",
    }),
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("common/getRandomNumber");
  },
  methods: {
    ...mapActions({
      getRandomNumber: "common/getRandomNumber",
    }),
  },
};
</script>

<style scoped>
</style>
