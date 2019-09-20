<template>
  <div class="mainLogo">
    <img src="../assets/img/mainLogo.svg" alt class="mainLogo__img" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/_smart-grid.scss";

.mainLogo {
  display: inline-flex;

  &__img {
    height: auto;

    @include sm(height, 125px);
  }
}
</style>