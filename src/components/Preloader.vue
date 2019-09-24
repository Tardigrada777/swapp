<template>
  <div class="preloader">
    <div class="preloader__ration"></div>

    <video autoplay loop class="preloader__content">
      <source src="../assets/video/videoplayback.mp4" type="video/mp4" />Your browser does not support the video tag or the file format of this video.
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.preloader {
  position: relative;

  &__ration {
    padding-top: 56.25%;
    height: 0;
  }

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>