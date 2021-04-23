/** @format */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBydxg3BXTOVA5d_Yjyw6QHaART6mISmLE",
    libraries: "places",
  },
  installComponents: true,
});
Vue.config.productionTip = false;
Vue.use(VueTelInputVuetify, {
  vuetify,
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

