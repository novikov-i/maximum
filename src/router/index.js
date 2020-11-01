import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: () => import("../views/Schedule.vue")
  },
  {
    path: "/lesson/",
    name: "Lesson",
    component: () => import("../views/Lesson"),
    children: [
      {
        path: "/lesson/test/",
        component: () => import("../views/Lesson/Test.vue")
      },
      {
        path: "/lesson/statistic/",
        component: () => import("../views/Lesson/Statistic.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
