<template>
  <div class="blured" :class="{'blured-on': blur}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    blur: Boolean
  }
};
</script>

<style lang="scss" scoped>
.blured {
  &-on {
    filter: blur(7px);
    outline: solid 14px;
  }
}
</style>