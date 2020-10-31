<template>
  <div id="app">
    <Header />

    <div class="main">
      <ul class="nav">
        <router-link
          to="/"
          tag="li"
          class="nav__item"
          exact-active-class="nav__item_active"
          >Главаня</router-link
        >
        <router-link
          to="/about"
          tag="li"
          class="nav__item"
          exact-active-class="nav__item_active"
          >Расписание</router-link
        >
      </ul>

      <div class="main__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial;
}

.main {
  display: flex;

  &__content {
    width: calc(100% - 200px);
    padding: 20px;
    //   background-color: #f6f6f4;
  }
}

.nav {
  display: flex;
  // align-items: center;
  flex-direction: column;
  width: 200px;
  // background-color: #ffe01b;
  background-color: #f6f6f4;
  min-height: calc(100vh - 50px);
  list-style-type: none;
  // padding: 30px;
  padding-left: 0;

  &__item {
    padding: 10px 30px;
    // margin-bottom: 20px;
    cursor: pointer;
    // color: #403b3b;

    &_active {
      color: #fff;
      background-color: #9c9c9c;
    }
  }
}
</style>
