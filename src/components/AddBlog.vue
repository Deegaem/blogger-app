<template>
  <div class="container">
    <h2 v-if="!submitted">Add a New Blog Post</h2>
    <form v-if="!submitted">
      <div class="form-group">
        <label for="BlogTitle">Blog Title</label>
        <input
          type="text"
          class="form-control"
          placeholder="Blog Title"
          id="BlogTitle"
          v-model.lazy="blog.title"
        />
      </div>
      <div class="form-group">
        <label for="BlogContent">Blog Content</label>
        <textarea class="form-control" rows="5" id="BlogContent" v-model.lazy="blog.content"></textarea>
      </div>
      <div id="checkboxes">
        <label class="form-check-label" for="sport">Sport</label>
        <input
          type="checkbox"
          class="form-check-input"
          id="sport"
          value="sport"
          v-model.lazy="blog.categories"
        />
        <label class="form-check-label" for="hike">Hike</label>
        <input
          type="checkbox"
          class="form-check-input"
          id="hike"
          value="hike"
          v-model.lazy="blog.categories"
        />
        <label class="form-check-label" for="travel">Travel</label>
        <input
          type="checkbox"
          class="form-check-input"
          id="travel"
          value="travel"
          v-model.lazy="blog.categories"
        />
      </div>
      <div class="form-group from-select">
        <label for="author">Author</label>
        <select class="form-control" id="author" v-model="blog.author">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
      </div>
      <button class="btn btn-primary" v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
      <!-- </div>
      <div id="preview">
      <h3>Preview Blog</h3>-->
      <p>Blog title:{{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories</p>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="categorie in blog.categories"
          :key="categorie"
        >{{categorie}}</li>
      </ul>
      <p>Author:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data: () => {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["Angular", "Vue", "React"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.axios
        .post("http://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userld: 1
        })
        .then(response => {
          console.log(response.data);
          this.submitted = true;
        });
    }
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
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
  margin: 0 30px;
}
</style>
