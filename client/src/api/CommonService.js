/** @format */

import axios from "axios";
import NProgress from "nprogress";

export const namespaced = true;

const baseUrl = process.env.VUE_APP_API_URL;

const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export default {
  async getEducations() {
    return apiClient
      .get(`/education`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
  async getWorkExp() {
    return apiClient
      .get(`/experience`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
  async getRandomNumber() {
    return apiClient
      .get(`/randomNumber`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
  async getRPSOpponentsMove() {
    return apiClient
      .get(`/rps-opponents-move`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
  async tttAiAssign(mark) {
    return apiClient
      .get(`/ttt-ai-assign?mark=${mark}`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
  async getTttAiMove(i, j) {
    return apiClient
      .get(`/ttt-ai-move?i=${i}&j=${j}`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
};
