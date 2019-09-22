<template>
  <span class="icon" :class="iconType" :style="styleProps"></span>
</template>

<script>
export default {
  props: {
    type: String,
    size: String
  },
  computed: {
    iconType() {
      return `icon--${this.type}`;
    },
    styleProps() {
      return {
        width: this.size + "px",
        height: this.size + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>