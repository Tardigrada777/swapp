<template>
  <div class="home">
    <br />
    <CharactersList :items="characters" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CharactersList from "../components/CharactersList";

export default {
  name: "home",
  components: {
    CharactersList
  },
  computed: {
    ...mapGetters(["characters"])
  },
  methods: {
    ...mapActions(["getCharacters"])
  },
  created() {
    this.getCharacters();
  }
};
</script>

<style lang="scss">
</style>
