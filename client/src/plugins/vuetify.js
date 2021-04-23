/** @format */

import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@fortawesome/fontawesome-free/css/all.css";
import VueAnimateNumber from "vue-animate-number";
Vue.use(VueAnimateNumber);
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
  },
});
