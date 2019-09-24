<template>
  <div class="charactersList">
    <div class="charactersList__item" v-for="(character, i) in items" :key="`char#${i}`">
      <CharacterCard :character="character" @click="openCharacterModal(character)" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import CharacterCard from "../components/CharacterCard";

export default {
  props: {
    items: Array
  },
  components: {
    CharacterCard
  },
  methods: {
    ...mapMutations({
      setModalState: "SET_CHARACTER_MODAL_STATE",
      blur: "SET_BLUR"
    }),
    ...mapActions(["getCurrentCharacter"]),
    openCharacterModal(character) {
      this.setModalState(true);
      this.blur(true);
      this.getCurrentCharacter(character);
      document.body.style.overflow = "hidden";
    }
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