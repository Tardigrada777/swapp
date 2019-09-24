<template>
  <div class="home">
    <transition
      enter-active-class="animated fadeIn faster"
      leave-active-class="animated fadeOut faster"
      mode="out-in"
    >
      <Preloader v-if="isLoading" />
      <div class="mainContent" v-else>
        <div class="mainContent__search">
          <Search placeholder="Search by name" v-model="query" @input="debouncedSearch" />
        </div>
        <CharactersList :items="characters" />

        <button class="btn" @click="more" v-if="hasMore">
          <div class="lds-ellipsis" v-if="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span v-else>More Characters</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Search from "../components/Search";
import CharactersList from "../components/CharactersList";

import Preloader from "../components/Preloader";

import { debounce } from "../utils/debounce";

export default {
  name: "home",
  components: {
    CharactersList,
    Preloader,
    Search
  },
  data() {
    return {
      contentVisible: false,
      query: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters(["characters", "isLoading", "hasMore"]),
    debouncedSearch() {
      let DELAY = 2000;
      return debounce(this.search, DELAY);
    }
  },
  methods: {
    ...mapActions(["getCharacters", "getSpecies", "getMore"]),
    search() {
      if (this.query.length === 0) return;
      this.getCharacters(`?search=${this.query}`);
    },
    more() {
      this.loading = true;
      this.getMore().then(() => {
        this.loading = false;
      });
    }
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
@import "../assets/_fonts.scss";
@import "../assets/_colors.scss";
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

.btn {
  padding: 5px 24px;
  font-family: $base;
  font-size: 28px;
  font-weight: bold;
  border: 4px solid orange;
  color: orange;
  background-color: transparent;
  min-width: 265px;
  @include md(width, 100%);

  &:hover,
  &:active,
  &:focus {
    background-color: orange;
    color: $black;
  }
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 32px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 14px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
}
</style>
