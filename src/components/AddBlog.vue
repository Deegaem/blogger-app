<template>
  <b-container>
    <b-form class="my-style" v-if="!submittedFlag" @submit="post">
      <h3 v-if="!submittedFlag">Add a New Blog Post</h3>
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
        placeholder="select Image"
      ></b-form-file>
      <b-progress variant="primary" :value="value" :max="max" show-value class="mb-3"></b-progress>
      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="blog.categories" id="checkboxes-4">
          <b-form-checkbox value="sport">sport</b-form-checkbox>
          <b-form-checkbox value="hiking">Hiking</b-form-checkbox>
          <b-form-checkbox value="traveling">Traveling</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-select class="mb-2" v-model="blog.author" :options="authors"></b-form-select>
      <b-button type="submit" class="mybtn mt-2 mr-2" variant="primary">Submit</b-button>
      <b-button class="mt-2" variant="primary" v-on:click="cancel">Cancel</b-button>
    </b-form>
    <div class="my-style" v-if="submittedFlag">
      <h3>Thanks for adding your post {{blog.title}}</h3>
      <template v-if="blog.imageFlag">
        <p>Image:</p>
        <b-img
          thumbnail
          width="125"
          height="125"
          :src="blog.remoteImgUrl"
          alt="Right image"
        ></b-img>
      </template>
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
      <b-link to="/">Carousel</b-link>
    </div>
</b-container>
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
        imageFlag: true,
        categories: [],
        author: "",
      },
      authors: ["Adele Vance", "Alex Wiber", "Debra Berger"],
      submittedFlag: false,
      file: null,
      value: 0,
      max: 100,
    };
  },
  watch: {
    file() {
      var imageName = this.file.name;
      var sr = storageRef.ref("images/" + imageName);
      var uploadTask = sr.put(this.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.value =
            (snapshot.bytesTransferred / snapshot.totalBytes) * this.max;
        },
        null,
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            this.blog.remoteImgUrl = url;
          });
        }
      );
    },
  },
  methods: {
    ...mapActions(["addBlog"]),
    post: function (e) {
      e.preventDefault();
      if (this.blog.remoteImgUrl === "") {
        this.blog.imageFlag = false;
      }
      this.addBlog({
        title: this.blog.title,
        content: this.blog.content,
        remoteImgUrl: this.blog.remoteImgUrl,
        imageFlag: this.blog.imageFlag,
        categories: this.blog.categories,
        author: this.blog.author,
      });
      this.submittedFlag = true;
    },
    cancel: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
a:link {
  color: yellow;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: cyan;
}

/* mouse over link */
a:hover {
  color: lightgreen;
}

/* selected link */
a:active {
  color: hotpink;
}
</style>
