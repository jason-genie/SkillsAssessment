/** @format */

import Vue from "vue";
import Vuex from "vuex";
import * as common from "@/store/modules/common.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
  },
});
