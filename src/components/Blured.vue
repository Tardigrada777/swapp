<template>
  <div class="blured" :class="{'blured-on': blur}">
    <div class="blured__shadow" v-if="blur"></div>
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
  &__shadow {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: transparent;
  }
  &-on {
    filter: blur(10px);
    outline: solid 20px;
  }
}
</style>