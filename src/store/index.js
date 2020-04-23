import Vue from "vue";
import Vuex from "vuex";
import { db } from "../db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
  },
  mutations: {
    setBlogs(state, data) {
      state.blogs = data;
    },
  },
  actions: {
    getBlogs(context) {
      db.collection("blogs")
        .get()
        .then((snapshot) => {
          let items = [];
          snapshot.forEach((doc) => {
            let item = doc.data();
            item.id = doc.id;
            items.push(item);
          });
          context.commit("setBlogs", items);
        });
    },
  },
  getters: {
    getBlogById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id === id);
    },
  },
  modules: {},
});
