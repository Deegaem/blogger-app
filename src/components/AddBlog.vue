<template>
  <div class="container">
    <h2 v-if="!submitted">Add a New Blog Post</h2>
    <b-form class="my-style" v-if="!submitted">
      <b-form-group id="input-group-1" label="Blog Title:" label-for="input-1">
        <b-form-input id="input-1" v-model="blog.title" type="text" placeholder="Blog Title"></b-form-input>
      </b-form-group>
      <b-form-group label="Blog Content:" label-for="input-2">
        <b-form-textarea id="input-2" v-model="blog.content" size="sm" placeholder="Add content"></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="blog.categories" id="checkboxes-4">
          <b-form-checkbox value="sport">sport</b-form-checkbox>
          <b-form-checkbox value="hike">Hike</b-form-checkbox>
          <b-form-checkbox value="travel">Travel</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-select class="mb-2" v-model="blog.author" :options="authors"></b-form-select>
      <b-button variant="primary" v-on:click.prevent="post">Add Blog</b-button>
    </b-form>
    <div class="my-style" v-if="submitted">
      <h3>Thanks for adding your post {{blog.title}}</h3>
      <br />
      <p>Blog Content:</p>
      <br />
      <p>{{blog.content}}</p>
      <br />
      <p>Blog Categories:</p>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="categorie in blog.categories"
          :key="categorie"
        >{{categorie}}</li>
      </ul>
      <br />
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

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
      db.collection("blogs")
        .add({
          author: this.blog.author,
          categories: this.blog.categories,
          content: this.blog.content,
          title: this.blog.title
        })
        .then(() => {
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped lang="scss">
h3,
h2 {
  color: #007bff;
}
a {
  color: #e6ebe9;
}
.my-style {
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
