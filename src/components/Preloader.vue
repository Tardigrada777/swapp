<template>
  <div class="preloader">
    <video onloadeddata="this.play();" autoplay loop>
      <source type="video/mp4" src="../assets/video/videoplayback.mp4" />Your browser does not support the video tag or the file format of this video.
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