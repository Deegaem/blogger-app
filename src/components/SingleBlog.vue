<template>
  <div class="container">
    <h1>Blog</h1>
    <div class="card mb-2">
      <div class="card-body">
        <h4 class="card-title">{{blog.title}}</h4>
        <p class="card-text">{{blog.body}}</p>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    this.axios
      .get("http://jsonplaceholder.typicode.com/posts", {
        params: {
          id: this.id
        }
      })
      .then(response => {
        this.blog = response.data[0];
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
