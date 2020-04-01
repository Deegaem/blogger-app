import Vue from "vue";
import VueRouter from "vue-router";
import ShowBlogs from "../components/ShowBlogs.vue";
import AddBlog from "../components/AddBlog.vue";
import SingleBlog from "../components/SingleBlog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ShowBlogs",
    component: ShowBlogs
  },
  {
    path: "/add",
    name: "AddBlog",
    component: AddBlog
  },
  {
    path: "/blog/:id",
    name: "Blog",
    component: SingleBlog
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
