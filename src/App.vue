<template>
  <div id="app">
    <Blured :blur="isBlured" class="app">
      <AppHeader class="header" />
      <main class="content">
        <div class="content__view">
          <div class="container">
            <router-view />
          </div>
        </div>
      </main>
      <AppFooter />
    </Blured>

    <Modal />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import AppHeader from "./components/AppHeader";
import Blured from "./components/Blured";
import AppFooter from "./components/AppFooter";
import Modal from "./components/Modal";

export default {
  components: {
    AppHeader,
    Blured,
    AppFooter,
    Modal
  },
  computed: {
    ...mapGetters(["isBlured"])
  }
};
</script>

<style lang="scss">
@import "./assets/global.scss";
@import "./assets/_smart-grid.scss";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  min-height: calc(100vh * 1 / 3);

  @include md(min-height, auto);
  @include md(padding, 57px 0px);
}

.content {
  flex-grow: 2;

  display: flex;
  flex-direction: column;
  min-height: calc(100vh * 2 / 3);

  &__view {
    background-color: $light-black;
    flex-grow: 1;
  }
}
</style>
