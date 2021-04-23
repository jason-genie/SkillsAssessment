/** @format */
import CommonService from "../../api/CommonService.js";

export const namespaced = true;

export const state = () => ({
  educations: [],
  workExp: [],
  randomNum: null,
  rpsOpponentsMove: 0,
  tttAiMove: null,
  loading: false
});

export const getters = {
  educations: (state) => state.educations,
  workExp: (state) => state.workExp,
  randomNum: (state) => state.randomNum,
  rpsOpponentsMove: (state) => state.rpsOpponentsMove,
  tttAiMove: (state) => state.tttAiMove,
  loading: (state) => state.loading,
};

export const mutations = {
  SET_EDUCATIONS(state, data) {
    state.educations = data
  },
  SET_WORKEXPERIENCE(state, data) {
    state.workExp = data
  },
  SET_RANDOMNUMBER(state, data) {
    state.randomNum = data
  },
  SET_RPS_OPPONENTS_MOVE(state, data) {
    state.rpsOpponentsMove = data
  },
  SET_TTT_AI_MOVE(state, data) {
    state.tttAiMove = data
  },
  SET_LOADING(state, data) {
    state.loading = data
  }
};

export const actions = {
  async getEducations({ commit }) {
    try {
      const r = await CommonService.getEducations();
      commit("SET_EDUCATIONS", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      return responseStatus;
    }
  },
  async getWorkExp({ commit }) {
    try {
      const r = await CommonService.getWorkExp();
      commit("SET_WORKEXPERIENCE", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      return responseStatus;
    }
  },
  async getRandomNumber({ commit }) {
    try {
      const r = await CommonService.getRandomNumber();
      commit("SET_RANDOMNUMBER", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      return responseStatus;
    }
  },
  async getRPSOpponentsMove({ commit }) {
    try {
      const r = await CommonService.getRPSOpponentsMove();
      commit("SET_RPS_OPPONENTS_MOVE", r.data);
      return r;
    } catch (e) {
      let responseStatus = {};
      return responseStatus;
    }
  },
  async tttAiAssign({ commit }, mark) {
    try {
      const r = await CommonService.tttAiAssign(mark);
      commit("SET_TTT_AI_MOVE", r.data);
      return r.data;
    } catch (e) {
      return null;
    }
  },
  async getTttAiMove({ commit }, move) {
    try {
      const r = await CommonService.getTttAiMove(move.i, move.j);
      commit("SET_TTT_AI_MOVE", r.data);
      return null;
    } catch (e) {
      let responseStatus = {};
      return responseStatus;
    }
  },
};
