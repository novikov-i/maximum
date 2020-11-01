<template functional>
  <div class="loader">
    <div class="loader__background"></div>
    <div class="loader__spinner">spinner</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  &__background {
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 50%;
  }

  &__spinner {
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    animation: rotating 2s linear infinite;
  }
}
</style>
