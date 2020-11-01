<template>
  <div>
    <div v-if="selectedLessonsByCourseId.length > 0">
      <Pagination :data="selectedLessonsByCourseId" :perPage="5">
        <template #row="{row}">
          <div
            class="lesson-wrapper"
            @click="$router.push({ path: `/lesson/` })"
          >
            {{ row.title }}
          </div>
        </template>
      </Pagination>
    </div>

    <div v-else>
      Выберите курс
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Pagination
  },

  computed: {
    ...mapGetters(["selectedLessonsByCourseId"])
  }
};
</script>

<style lang="scss" scoped>
.lesson-wrapper {
  margin-bottom: 5px;
  padding: 10px;
  border: 1px solid #9c9c9c;
  border-radius: 5px;
}
</style>
