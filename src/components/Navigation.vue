<template functional>
  <ul class="nav">
    <router-link
      to="/"
      tag="li"
      class="nav__item"
      exact-active-class="nav__item_active"
      >Главаня</router-link
    >

    <router-link
      to="/schedule"
      tag="li"
      class="nav__item"
      exact-active-class="nav__item_active"
      >Расписание</router-link
    >
  </ul>
</template>

<style lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: calc(100vh - 50px);
  padding-left: 0;
  list-style-type: none;
  background-color: #f6f6f4;

  &__item {
    padding: 10px 30px;
    cursor: pointer;

    &_active {
      color: #fff;
      background-color: #9c9c9c;
    }
  }
}
</style>
