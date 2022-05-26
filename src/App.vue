<template>
  <div>
    {{ msg }}
    <br />
    {{ test }}
  </div>
</template>

<script>
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
};
</script>
