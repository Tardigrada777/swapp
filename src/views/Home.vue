<template>
  <div class="home">
    <transition leave-to-class="preloader-leave" mode="out-in" @after-leave="beforeEnterCharacters">
      <Preloader v-if="isLoading" />
    </transition>
    <transition enter-class="content-enter-in" enter-to-class="content-enter" mode="out-in">
      <CharactersList v-if="contentVisible && !isLoading" :items="characters" />
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import CharactersList from "../components/CharactersList";

import Preloader from "../components/Preloader";

export default {
  name: "home",
  components: {
    CharactersList,
    Preloader
  },
  data() {
    return {
      contentVisible: false
    };
  },
  computed: {
    ...mapGetters(["characters", "isLoading"])
  },
  methods: {
    ...mapActions(["getCharacters", "getSpecies"]),
    ...mapMutations({ toggleLoading: "TOGGLE_LOADING" }),
    beforeEnterCharacters() {
      this.contentVisible = true;
    }
  },
  created() {
    this.toggleLoading();
    setTimeout(() => {
      if (this.characters.length > 0) {
        this.toggleLoading();
      }
    }, 2000);
    this.getCharacters();
  }
};
</script>

<style lang="scss">
.home {
  padding: {
    top: 80px;
    bottom: 160px;
  }
}
.preloader-leave {
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.23, 1, 0.32, 1);
}

.content-enter {
  opacity: 1;
  transform: translateY(0);
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.content-enter-in {
  transform: translateY(5%);
  opacity: 0;
}
</style>
