<template>
  <div class="container">
    <b-form class="my-style" v-if="!submitted">
      <h3 v-if="!submitted">Add a New Blog Post</h3>
      <b-form-group id="input-group-1" label="Blog Title:" label-for="input-1">
        <b-form-input id="input-1" v-model="blog.title" type="text" placeholder="Blog Title"></b-form-input>
      </b-form-group>
      <b-form-group label="Blog Content:" label-for="input-2">
        <b-form-textarea id="input-2" v-model="blog.content" size="sm" placeholder="Add content"></b-form-textarea>
      </b-form-group>
      <b-form-file
        v-model="file"
        ref="pickImage"
        class="mt-3 mb-3"
        accept="image/*"
        plain
        placeholder="select add Image"
      ></b-form-file>
      <b-progress class="mb-3" variant="primary" :value="value" :max="max"></b-progress>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="blog.categories" id="checkboxes-4">
          <b-form-checkbox value="sport">sport</b-form-checkbox>
          <b-form-checkbox value="hike">Hike</b-form-checkbox>
          <b-form-checkbox value="travel">Travel</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-select class="mb-2" v-model="blog.author" :options="authors"></b-form-select>
      <b-button class="mybtn mt-2" variant="primary" v-on:click.prevent="post">Add Blog</b-button>
    </b-form>
    <div class="my-style" v-if="submitted">
      <h3>Thanks for adding your post {{blog.title}}</h3>
      <p>Image:</p>
      <b-img class="myImg" :src="blog.remoteImgUrl" fluid alt="Right image"></b-img>
      <br />
      <br />
      <p>Blog Content:</p>
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
      <b-link to="/">Blog List</b-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { storageRef } from "../db";
export default {
  name: "AddBlog",
  data: () => {
    return {
      blog: {
        title: "",
        content: "",
        remoteImgUrl: "",
        categories: [],
        author: ""
      },
      authors: ["Adele Vance", "Alex Wiber", "Debra Berger"],
      submitted: false,
      file: null,
      value: 0,
      max: 100
    };
  },
  watch: {
    file() {
      var imageName = this.file.name;
      var sr = storageRef.ref("images/" + imageName);
      var uploadTask = sr.put(this.file);
      uploadTask.on(
        "state_changed",
        snapshot => {
          this.value =
            (snapshot.bytesTransferred / snapshot.totalBytes) * this.max;
        },
        null,
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(url => {
            this.blog.remoteImgUrl = url;
          });
        }
      );
    }
  },
  methods: {
    ...mapActions(["addBlog"]),
    post: function() {
      this.addBlog({
        title: this.blog.title,
        content: this.blog.content,
        remoteImgUrl: this.blog.remoteImgUrl,
        categories: this.blog.categories,
        author: this.blog.author
      });
      this.submitted = true;
    }
  }
};
</script>

<style scoped lang="scss">
a:link {
  color: #1b0c02;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: #444036;
}

/* mouse over link */
a:hover {
  color: #444036;
}

/* selected link */
a:active {
  color: #444036;
}
</style>
