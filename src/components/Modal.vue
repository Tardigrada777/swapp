<template>
  <transition v-on:enter="enter" v-on:leave="leave">
    <div class="modal-container" ref="modal" v-if="isModalOpen">
      <div class="appModal">
        <span class="appModal__closeBtn" @click="close">&times;</span>
        <div class="appModal__content">
          <div class="characterInfo">
            <div class="characterInfo__avatar">
              <FirstCharAvatar name="Luke" />
            </div>
            <div class="characterInfo__name">Luke</div>
          </div>

          <Divider />

          <div class="details">
            <ul class="details__column">
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="calendar" size="24" />
                </div>
                <div class="characterDetailsItem__type">Birth&nbsp;Year</div>
                <div class="characterDetailsItem__content">AV23</div>
              </li>
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="alien" size="24" />
                </div>
                <div class="characterDetailsItem__type">Species</div>
                <div class="characterDetailsItem__content">Human</div>
              </li>
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="gender" size="24" />
                </div>
                <div class="characterDetailsItem__type">Gender</div>
                <div class="characterDetailsItem__content">Male</div>
              </li>
            </ul>

            <ul class="details__column">
              <li class="characterDetailsItem">
                <div class="characterDetailsItem__icon">
                  <Icon type="world" size="24" />
                </div>
                <div class="characterDetailsItem__type">Homeworld</div>
                <div class="characterDetailsItem__content">Earth</div>
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
      isOpen: false
    };
  },
  computed: {
    ...mapGetters(["isModalOpen"])
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
    },
    leave() {
      this.$refs.modal.style.top = "-150%";
    }
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
  top: -100%;
  left: 0;
  transition: all 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.appModal {
  border-radius: 8px;
  padding: 80px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @include col();
  @include size(8);
  @include md(padding, 48px 24px);
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

.modalOpening-enter-active,
.modalOpening-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.modalOpening-enter,
.modalOpening-leave-to {
  transform: translateY(-150%);
}
</style>