<template>
  <div class="container">
    <h2 v-if="!show">{{blog.title}}</h2>
    <b-form class="my-style" v-if="!show">
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
      <b-button variant="primary" v-on:click.prevent="update">Update</b-button>
    </b-form>
    <div class="my-style" v-if="show">
      <h2 class="mt-3">{{blog.title}}</h2>
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
</style>
