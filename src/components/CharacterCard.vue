<template>
  <div class="characterCard">
    <FirstCharAvatar class="characterCard__avatar" :name="character.name" />
    <div class="characterCard__name">{{ character.name }}</div>
    <div class="characterCard__species">{{ character.species }}</div>
  </div>
</template>

<script>
import FirstCharAvatar from "./FirstCharAvatar";

export default {
  props: {
    character: Object
  },
  components: {
    FirstCharAvatar
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_fonts.scss";
@import "../assets/_colors.scss";
@import "../assets/_smart-grid.scss";

.characterCard {
  background: $black;
  border-radius: 8px;
  padding: 92px 0;
  @include md(padding, 33px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: $base;

  text-align: center;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);

  transition: box-shadow 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    box-shadow: 0px 10px 40px rgba(37, 136, 167, 0.38);
    transition: box-shadow 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    cursor: pointer;
  }

  &__avatar {
    margin-bottom: 10px;
  }

  &__name {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: $white;
    margin-bottom: 10px;
  }

  &__species {
    font-size: 13px;
    line-height: 15px;
    color: $gray;
  }
}
</style>