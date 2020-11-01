<template>
  <div class="header">
    <div class="header__logo">
      logo
    </div>

    <div>
      <select v-model="courseId" @change="selectСourse($event)">
        <option
          v-for="course in courses"
          v-bind:value="course.id"
          :key="course.id"
        >
          {{ course.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      courseId: null
    };
  },

  methods: {
    selectСourse(event) {
      const courseId = event.target.value;
      this.$emit("selectCourse", courseId);
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  height: 50px;
  color: #fff;
  background-color: #4a76a8;

  &__logo {
    width: 200px;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
