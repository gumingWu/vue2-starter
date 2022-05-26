<template>
  <div>
    {{ msg }}
    <card2 style="height: 500px">
      <h1 slot="header">这是标题</h1>
      此处都是body区aaaa域
      <footer slot="footer">
        这是底部栏这是底部栏这是底部栏这是底部栏这是底部栏<br />asdasdasdad
      </footer>
    </card2>
    <card2 style="height: 500px"> 此处都是body区域 </card2>
  </div>
</template>

<script>
import Card2 from "./card2";
export default {
  name: "App",
  components: {
    Card2,
  },
  data() {
    return {
      msg: "im Apaaap",
    };
  },
};
</script>
