<template functional>
  <div class="main">
    <slot name="nav"></slot>

    <div class="main__content">
      <slot name="content"> </slot>
    </div>
  </div>
</template>

<style lang="scss">
.main {
  display: flex;

  &__content {
    width: calc(100% - 200px);
    padding: 20px;
  }
}
</style>
