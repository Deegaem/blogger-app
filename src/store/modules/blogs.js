import { db } from "../../db";

export default {
  state: {
    blogs: [],
  },
  mutations: {
    setBlogs(state, data) {
      state.blogs = data;
    },
    newBlog(state, data) {
      state.blogs.unshift(data);
    },
    updateBlog: (state, updBlog) => {
      const index = state.blogs.findIndex((blog) => blog.id === updBlog.id);
      if (index !== -1) {
        state.blogs.splice(index, 1, updBlog);
      }
    },
    removeBlog(state, id) {
      state.blogs = state.blogs.filter((blog) => blog.id !== id);
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
    addBlog(context, data) {
      db.collection("blogs")
        .add(data)
        .then((res) => {
          context.commit("newBlog", res.data);
        });
    },
    updateBlog(context, updblog) {
      db.collection("blogs")
        .doc(updblog.id)
        .update(updblog)
        .then(() => {
          context.commit("updateBlog", updblog);
        });
    },
    deleteBlog(context, id) {
      db.collection("blogs")
        .doc(id)
        .delete()
        .then(() => {
          context.commit("removeBlog", id);
        });
    },
  },
  getters: {
    getAllBlog: (state) => () => {
      return state.blogs;
    },
    getBlogById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id === id);
    },
  },
};
