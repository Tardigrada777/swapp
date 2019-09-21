<template>
  <div class="preloader">
    <video autoplay loop>
      <source src="../assets/video/videoplayback.mp4" type="video/mp4" />Your browser does not support the video tag or the file format of this video.
    </video>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>