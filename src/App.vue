<template>
  <div id="app">
    <Blured :blur="blur" class="app">
      <AppHeader class="header" />
      <main class="content">
        <div class="content__view">
          <div class="container">
            <router-view />
          </div>
        </div>
        <footer class="content__footer">
          <div class="container">Footer content</div>
        </footer>
      </main>
    </Blured>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import Blured from "./components/Blured";

export default {
  components: {
    AppHeader,
    Blured
  },
  data() {
    return {
      blur: false
    };
  }
};
</script>

<style lang="scss">
@import "./assets/global.scss";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  min-height: 33vh;
}

.content {
  flex-grow: 2;

  display: flex;
  flex-direction: column;

  &__view {
    background-color: $light-black;
    flex-grow: 1;
  }
  &__footer {
    background-color: $black;
  }
}
</style>
