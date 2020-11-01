<template>
  <div class="lesson">
    <div class="lesson__tabs">
      <div
        class="lesson__tab"
        @click="$router.push({ path: `/lesson/statistic/` })"
      >
        Статистика
      </div>

      <div class="lesson__tab" @click="$router.push({ path: `/lesson/test/` })">
        Tесты
      </div>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.lesson {
  &__tabs {
    display: flex;
    margin-bottom: 20px;
  }

  &__tab {
    margin-right: 10px;
    color: #4a76a8;
    cursor: pointer;
  }
}
</style>
