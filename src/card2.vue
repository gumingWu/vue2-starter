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
  name: "Card2",
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
}
.header {
}

.content {
  flex: 1;
}

.footer {
}
</style>
