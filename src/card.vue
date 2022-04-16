<template>
  <div class="card-container">
    <div v-if="$slots.header" class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card-container {
  position: relative;
}
.header {
}

.content {
}

.footer {
  position: absolute;
  bottom: 0;
}
</style>
