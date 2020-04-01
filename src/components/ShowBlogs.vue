<template>
  <div class="container">
    <h1>All Blog Articles</h1>
    <ul>
      <li v-for="(blog, id) in blogs" :key="id">
        <div class="card mb-2">
          <div class="card-body">
            <router-link v-bind:to="'/blog/'+ blog.id">
              <h4 class="card-title">{{blog.title}}</h4>
            </router-link>
            <p class="card-text">{{blog.body}}</p>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShowBlogs",
  data: () => {
    return {
      blogs: []
    };
  },
  methods: {},
  created() {
    this.axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.blogs = response.data.slice(0, 10);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #e6ebe9;
}
</style>
