<template>
  <div class="container">
    <h2 v-if="!show">{{blog.title}}</h2>
    <form v-if="!show">
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
      <button class="btn btn-primary" v-on:click.prevent="update">Update</button>
    </form>
    <div v-if="show">
      <h3>{{blog.title}}</h3>
      <br />
      <p>{{blog.content}}</p>
      <br />
      <p>Author: {{blog.author}}</p>
      <br />
      <button class="btn btn-primary mx-2" v-on:click="toggle()">To Update</button>
      <button class="btn btn-primary mx-2" v-on:click="remove">Remove</button>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: ["Angular", "Vue", "React"],
      show: true
    };
  },
  created() {
    db.collection("blogs")
      .doc(this.id)
      .get()
      .then(snapshot => {
        const document = snapshot.data();
        this.blog = document;
      });
  },
  methods: {
    update: function() {
      db.collection("blogs")
        .doc(this.id)
        .update({
          title: this.blog.title,
          content: this.blog.content,
          categories: this.blog.categories,
          author: this.blog.author
        })
        .then(() => {
          this.$router.push("/");
        });
    },
    remove: function() {
      db.collection("blogs")
        .doc(this.id)
        .delete()
        .then(() => {
          this.$router.push("/");
        });
    },
    toggle: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped lang="scss">
.my-mb {
  margin-bottom: 15px;
}
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
