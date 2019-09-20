<template>
  <div class="appModal">
    <span class="appModal__closeBtn">&times;</span>
    <div class="appModal__content">
      <div class="characterInfo">
        <div class="row-flex">
          <div class="characterInfo__avatar"></div>
          <div class="characterInfo__name"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/_colors.scss";
@import "../assets/_smart-grid.scss";

.appModal {
  border-radius: 8px;
  padding: 80px;
  @include col();
  @include size(8);
  display: none;

  height: 492px;

  background-color: $black;
  color: $white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);

  &__closeBtn {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 24px;
    line-height: 24px;
    &:hover {
      cursor: pointer;
    }
  }
}

.characterInfo {
  display: flex;
  flex-direction: column;
}
</style>