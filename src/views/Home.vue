<template>
  <div class="home">
    <br />
    <!-- <CharactersList :items="characters" /> -->
    <Preloader />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CharactersList from "../components/CharactersList";

import Preloader from "../components/Preloader";

export default {
  name: "home",
  components: {
    CharactersList,
    Preloader
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
