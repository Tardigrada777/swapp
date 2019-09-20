<template>
  <div class="characterCard">
    <div class="characterCard__avatar" :style="{backgroundColor: avatarColor}">
      <span>{{ firstChar }}</span>
    </div>
    <div class="characterCard__name">{{ character.name }}</div>
    <div class="characterCard__species">{{ species }}</div>
  </div>
</template>

<script>
import { avatarColor } from "../utils/avatarColor";

export default {
  data() {
    return {
      // FIXME: temp dev
      character: {
        name: "Luke Skywalker",
        species: [
          // TODO: XHR
          "Human",
          "Jedy"
        ]
      }
    };
  },
  computed: {
    avatarColor() {
      return avatarColor(this.character.name);
    },
    firstChar() {
      return this.character.name[0] || "A";
    },
    species() {
      return this.character.species.join(", ");
    }
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
    width: 80px;
    height: 80px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    align-self: center;

    margin-bottom: 10px;

    span {
      font-weight: 500;
      font-size: 48px;
      line-height: 56px;
      color: $white;
    }
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