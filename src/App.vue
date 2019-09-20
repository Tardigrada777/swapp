<template>
  <div id="app" class="app">
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
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  components: {
    AppHeader
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
  background-color: palevioletred;
  flex-grow: 2;

  display: flex;
  flex-direction: column;

  &__view {
    background-color: orangered;
    flex-grow: 1;
  }
  &__footer {
    background-color: teal;
  }
}
</style>
