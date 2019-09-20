<template>
  <footer class="appFooter bg--black">
    <div class="container">
      <h3 class="appFooter__copy">Star Wars Character Encyclopedia, 2019</h3>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/_smart-grid.scss";
.appFooter {
  padding: 50px 0px;

  &__copy {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 0.11em;
    @include md(font-size, 14px);
  }
}
</style>