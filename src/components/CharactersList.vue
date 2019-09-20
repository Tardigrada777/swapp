<template>
  <div class="charactersList">
    <div class="charactersList__item" v-for="(character, i) in items" :key="`char#${i}`">
      <CharacterCard :character="character" />
    </div>
  </div>
</template>

<script>
import CharacterCard from "../components/CharacterCard";

export default {
  props: {
    items: Array
  },
  components: {
    CharacterCard
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_smart-grid.scss";

.charactersList {
  @include row-flex();

  &__item {
    margin-bottom: 32px;

    @include col();
    @include size(6);
    @include size-md(12);
  }
}
</style>