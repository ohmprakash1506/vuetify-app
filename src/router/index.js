import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaskView from "../views/TaskView.vue";
import FollowupsView from "../views/FollowupsView.vue";
import SalesView from "../views/SalesView.vue";
import BookingView from "../views/BookingView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/task",
    name: "task",
    component: TaskView,
  },
  {
    path: "/follow_ups",
    name: "followups",
    component: FollowupsView,
  },
  {
    path: "/sales_converted",
    name: "salesconverted",
    component: SalesView,
  },
  {
    path: "/booking",
    name: "booking",
    component: BookingView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
