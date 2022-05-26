import { Store } from "vuex";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Store({
  state: {
    name: "hhh",
    age: 18,
  },
  getters: {
    me: (state) => `my name is ${state.name},and age is ${state.age}`,
  },
});
