<template>
  <div class="header">
    <div class="header__logo">
      logo
    </div>
    <div>
      <select>
        <option>
          1
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #4a76a8;
  color: #fff;

  &__logo {
    width: 200px;
    // margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
