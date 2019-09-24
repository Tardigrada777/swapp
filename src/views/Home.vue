<template>
  <div class="home">
    <!-- <transition leave-to-class="preloader-leave" @after-leave="beforeEnterCharacters">
      <Preloader v-if="isLoading" />
    </transition>-->
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <Preloader v-if="isLoading" />
      <div class="mainContent" v-else>
        <div class="mainContent__search">
          <Search placeholder="Search by name" />
        </div>
        <CharactersList :items="characters" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Search from "../components/Search";
import CharactersList from "../components/CharactersList";

import Preloader from "../components/Preloader";

export default {
  name: "home",
  components: {
    CharactersList,
    Preloader,
    Search
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
    ...mapActions(["getCharacters", "getSpecies"])
  },
  created() {
    if (this.characters.length) {
      this.contentVisible = true;
    } else {
      this.getCharacters().then(() => {
        this.contentVisible = true;
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/_smart-grid.scss";

.home {
  padding: {
    top: 80px;
    bottom: 160px;
  }
}

.mainContent {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__search {
    margin-bottom: 80px;

    @include col();
    @include size(8);
    @include size-md(12);
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
