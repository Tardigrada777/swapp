<template>
  <transition
    enter-active-class="animated fadeInDown faster"
    leave-active-class="animated fadeOutUp faster"
    v-on:enter="enter"
  >
    <div class="modal-container" ref="modal" v-if="isModalOpen">
      <div class="appModal">
        <span class="appModal__closeBtn" @click="close">&times;</span>
        <div v-if="isCharaterInfoLoading" class="appModal__preloader">
          <div class="lds-dual-ring"></div>
        </div>
        <div class="appModal__content" v-else>
          <div class="characterInfo">
            <div class="characterInfo__avatar">
              <FirstCharAvatar :name="currentCharacter.name" />
            </div>
            <div class="characterInfo__name">{{ currentCharacter.name }}</div>
          </div>

          <Divider />

          <div class="details">
            <ul class="details__column">
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="calendar" size="24" />
                </div>
                <div class="characterDetailsItem__type">Birth&nbsp;Year</div>
                <div class="characterDetailsItem__content">{{ currentCharacter.birth_year }}</div>
              </li>
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="alien" size="24" />
                </div>
                <div class="characterDetailsItem__type">Species</div>
                <div class="characterDetailsItem__content">{{ currentCharacter.species }}</div>
              </li>
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="gender" size="24" />
                </div>
                <div class="characterDetailsItem__type">Gender</div>
                <div class="characterDetailsItem__content">{{ currentCharacter.gender }}</div>
              </li>
            </ul>

            <ul class="details__column">
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="world" size="24" />
                </div>
                <div class="characterDetailsItem__type">Homeworld</div>
                <div class="characterDetailsItem__content">{{ currentCharacter.homeworldName }}</div>
              </li>
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="film" size="24" />
                </div>
                <div class="characterDetailsItem__type">Films</div>
                <div class="characterDetailsItem__content">Films</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import FirstCharAvatar from "../components/FirstCharAvatar";
import Icon from "./Icon";
import Divider from "./Divider";

export default {
  components: {
    FirstCharAvatar,
    Divider,
    Icon
  },
  data() {
    return {
      isOpen: false,
      character: {}
    };
  },
  computed: {
    ...mapGetters(["isModalOpen", "currentCharacter", "isCharaterInfoLoading"])
  },
  methods: {
    ...mapMutations({
      setModalState: "SET_CHARACTER_MODAL_STATE",
      blur: "SET_BLUR"
    }),
    close() {
      this.setModalState(false);
      this.blur(false);
      document.body.style.overflow = "auto";
    },
    enter() {
      this.$refs.modal.style.top = `${window.scrollY}px`;
    }
  },
  created() {
    this;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/_colors.scss";
@import "../assets/_fonts.scss";
@import "../assets/_smart-grid.scss";

.modal-container {
  @include row-flex();
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.appModal {
  border-radius: 8px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  min-height: 492px;
  display: flex;
  justify-content: center;

  @include col();
  @include size(8);

  @include md(top, 0);
  @include md(left, 0);
  @include md(width, 100%);
  @include md(height, 100%);
  @include md(transform, translateY(0) translateX(0));

  background-color: $black;
  color: $white;

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

  &__preloader {
    display: flex;
    justify-content: center;
    align-self: center;
  }
  &__content {
    padding: 80px;
    @include md(padding, 48px 24px);
    width: 100%;
  }
}

.characterInfo {
  display: flex;
  align-items: center;
  font-family: $base;

  margin-bottom: 48px;

  &__avatar {
    margin-right: 16px;
  }

  &__name {
    font-size: 24px;
    line-height: 28px;
    font-weight: bold;
  }
}

.characterDetailsItem {
  display: flex;
  align-items: center;

  margin-bottom: 20px;
  font-family: $base;
  font-size: 18px;
  line-height: 21px;

  &__icon {
    margin-right: 8px;
    width: 24px;
  }
  &__type {
    color: $gray;
    min-width: 73px;
    width: 93px;
    margin-right: 24px;
  }
  &__content {
    font-weight: bold;
  }
}

.details {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 48px;

  @include row-flex();

  &__column {
    @include col();
    @include size(6);
    // FIXME: похоже на костыль
    @include to(990px) {
      width: 100%;
    }
    @include size-md(12);
  }
}

.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>