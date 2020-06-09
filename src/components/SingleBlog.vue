<template>
  <div class="container">
    <b-form class="my-style" v-if="!show">
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
        v-if="!flag"
      ></b-form-file>
      <b-progress class="mb-2" variant="primary" :value="value" :max="max" v-if="!flag"></b-progress>
      <b-button class="mb-2" variant="primary" v-on:click="removeImage" v-if="flag">Remove old image</b-button>
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
      <h3 class="mt-3">{{blog.title}}</h3>
      <div>
        <b-img id="myImg" :src="blog.remoteImgUrl" fluid alt="Responsive image"></b-img>
      </div>
      <br />
      <p>{{blog.content}}</p>
      <br />
      <p>Author: {{blog.author}}</p>
      <br />
      <button class="btn mybtn btn-primary mx-2 mb-2" v-on:click="toggle">To Update</button>
      <button class="btn mybtn btn-primary mb-2" v-on:click="removeBlog">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { storageRef } from "../db";
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      authors: ["Adele Vance", "Alex Wiber", "Debra Berger"],
      show: true,
      file: null,
      value: 0,
      max: 100,
      flag: true
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
  computed: {
    blog() {
      return this.$store.getters.getBlogById(this.id);
    }
  },
  methods: {
    ...mapActions(["deleteBlog", "updateBlog"]),
    update: function() {
      this.updateBlog({
        id: this.id,
        title: this.blog.title,
        content: this.blog.content,
        remoteImgUrl: this.blog.remoteImgUrl,
        categories: this.blog.categories,
        author: this.blog.author
      });
      this.$router.push("/");
    },
    removeBlog: function() {
      this.deleteBlog(this.id);
      this.removeImage();
      this.$router.push("/");
    },
    removeImage: function() {
      var desertRef = storageRef.refFromURL(this.blog.remoteImgUrl);
      desertRef.delete().then(() => {
        this.flag = !this.flag;
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
#myImg {
  max-width: 780px;
  max-height: 312px;
}
</style>