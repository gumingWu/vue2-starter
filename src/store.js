import { Store } from "vuex";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Store({
  state: {
    name: "hhh",
    age: 18,
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    setData({ commit }) {
      const p = new Promise((res) => {
        setTimeout(() => {
          res("new name");
        }, 2000);
      });
      p.then((res) => {
        commit("setName", res);
      });
    },
  },
  getters: {
    me: (state) => `my name is ${state.name},and age is ${state.age}`,
  },
});
