<template>
  <div class="home">
    <div class="round" :style="{backgroundColor: color('John')}">J</div>
    <div class="round" :style="{backgroundColor: color('Oby')}">O</div>
    <div class="round" :style="{backgroundColor: color('Ioda')}">I</div>
    <div class="round" :style="{backgroundColor: color('Ed')}">E</div>
    <div class="round" :style="{backgroundColor: color('Dart')}">D</div>
    <div class="round" :style="{backgroundColor: color('Lia')}">L</div>
  </div>
</template>

<script>
import { avatarColor } from "../utils/avatarColor";

export default {
  name: "home",
  components: {},
  methods: {
    color(name) {
      return avatarColor(name);
    }
  }
};
</script>

<style lang="scss">
.round {
  width: 50px;
  height: 50px;
  border-radius: 50%;

  color: #fff;
  text-align: center;
  font-size: 34px;
}
</style>
