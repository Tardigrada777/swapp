<template>
  <div class="charactersList">
    <div class="charactersList__item" v-for="(character, i) in 10" :key="`char#${i}`">
      <CharacterCard />
    </div>
  </div>
</template>

<script>
import CharacterCard from "../components/CharacterCard";

export default {
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