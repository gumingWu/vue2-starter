<template>
  <div>
    {{ msg }}
    <br />
    {{ test }}
    <br />
    <button @click="setData">改变名字</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      msg: "im Apaaap",
      str: "test",
    };
  },
  computed: {
    test() {
      return this.$store.getters.me + ` my test str: ${this.str}`;
    },
  },
  methods: {
    ...mapActions(["setData"]),
  },
};
</script>
