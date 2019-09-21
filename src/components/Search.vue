<template>
  <div class="search">
    <span
      ref="placeholder"
      class="search__placeholder"
      :class="{'search__placeholder-up': hasFocus}"
    >{{ placeholder }}</span>
    <input
      class="search__input"
      type="text"
      v-model="query"
      @input="$emit('input', query)"
      ref="input"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String
  },
  data() {
    return {
      query: "",
      hasFocus: false
    };
  },
  mounted() {
    this.$refs.input.addEventListener("focus", e => {
      this.hasFocus = true;
    });
    this.$refs.placeholder.addEventListener("click", e => {
      this.hasFocus = true;
      this.$refs.input.focus();
    });
    this.$refs.input.addEventListener("blur", e => {
      if (!e.target.value.length) this.hasFocus = false;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_colors.scss";
@import "../assets/_fonts.scss";

.search {
  position: relative;

  font-family: $base;

  line-height: 21px;
  font-weight: 500;

  &__input {
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid $gray;
    width: 100%;
    color: $gray;
    padding: {
      bottom: 5px;
    }
  }
  &__placeholder {
    position: absolute;
    color: $gray;
    bottom: 8px;
    font-size: 18px;
    left: 0;

    transform-origin: left top;

    transition: all 0.2s ease-in-out;
    &-up {
      bottom: 30px;
      transform: scale(0.7);
    }
  }
}
</style>