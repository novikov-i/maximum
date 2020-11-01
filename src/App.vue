<template>
  <div id="app">
    <Header :courses="courses" @selectCourse="selectCourse" />

    <Main>
      <template v-slot:nav>
        <Navigation />
      </template>

      <template v-slot:content>
        <router-view />
      </template>
    </Main>

    <Loader v-if="loading" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import Main from "@/components/Main.vue";
import Loader from "@/components/Loader.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Header,
    Navigation,
    Main,
    Loader
  },

  computed: {
    ...mapGetters(["courses", "loading"])
  },

  methods: {
    ...mapMutations(["setLoading", "setLessonId"]),

    selectCourse(id) {
      this.setLessonId(id);
    }
  },

  async created() {
    this.setLoading(true);
    await this.$store.dispatch("getCourses");
    await this.$store.dispatch("getLessons");
    this.setLoading(false);
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
