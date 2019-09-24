<template>
  <ul class="filmsList">
    <li class="filmsList__item" v-for="(film, i) in films" :key="`film#${i}`">{{ film }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    films: Array
  }
};
</script>

<style lang="scss" scoped>
.filmsList {
  &__item {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 10px;
  }
}
</style>