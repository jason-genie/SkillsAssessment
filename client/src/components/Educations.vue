<!-- @format -->

<template>
  <v-container fluid>
    <div
      class="timeline"
      v-for="(education, index) in educations"
      v-bind:item="education"
      v-bind:index="index"
      v-bind:key="education.id"
    >
      <div class="timeline-item">
        <h4 class="item-title">{{ education.school }}</h4>
        <span class="item-period">{{ education.yearFrom }} - {{ education.yearTo }}</span>
        <span class="item-small">Skills: {{JSON.parse(education.skills)}} </span>
        <p class="item-description">
          Master of Science in Computer Science<br />
          GPA: 4.66
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.mdAndDown) return "width: 100%";
      return "width: 80%";
    },
    ...mapGetters({
      educations: "common/educations",
    }),
  },
  data: () => ({}),
  created() {
    this.$store.dispatch("common/getEducations");
  },
  methods: {
  },
};
</script>

<style scoped>
.timeline {
  border-left: 2px solid #e0e0e0;
  padding: 15px 0;
}

.timeline-item {
  position: relative;
  padding: 15px 20px 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-left: 2px solid #2196f3;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
}

.timeline-item:hover {
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:before {
  content: "";
  display: inline-block;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  width: 12px;
  height: 12px;
  top: 20px;
  left: -29px;
  border: 2px solid #2196f3;
  z-index: 2;
}

.timeline-item:after {
  content: "";
  display: inline-block;
  position: absolute;
  background-color: #2196f3;
  border-radius: 10px;
  width: 29px;
  height: 2px;
  top: 25px;
  left: -29px;
  z-index: 1;
}

.timeline-item .item-title {
  display: block;
  margin: 0;
  font-size: 16px;
  line-height: 1.2em;
}

.timeline-item .item-period {
  display: inline-block;
  font-size: 12px;
  line-height: 1.2em;
  color: #2196f3;
  margin-bottom: 8px;
}

.timeline-item .item-small {
  display: inline-block;
  font-size: 12px;
  line-height: 1.2em;
  color: #9e9e9e;
  margin-left: 5px;
  margin-bottom: 8px;
  padding-left: 8px;
  border-left: 1px solid #e0e0e0;
}
</style>
