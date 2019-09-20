<template>
  <header class="appHeader">
    <div class="container">
      <div class="appHeader__content">
        <MainLogo />
      </div>
    </div>
  </header>
</template>

<script>
import MainLogo from "./MainLogo";

export default {
  components: {
    MainLogo
  }
};
</script>

<style lang="scss" scoped>
.appHeader {
  background: url("../assets/img/header-bg.png") rgba(0, 0, 0, 0.8);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>