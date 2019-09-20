<template>
  <div class="firstCharAvatar" :style="{backgroundColor: avatarColor}">
    <span>{{ firstChar }}</span>
  </div>
</template>

<script>
import { avatarColor } from "../utils/avatarColor";

export default {
  props: {
    name: String
  },
  computed: {
    firstChar() {
      return this.name[0] || "A";
    },
    avatarColor() {
      return avatarColor(this.name);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_colors.scss";

.firstCharAvatar {
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
</style>