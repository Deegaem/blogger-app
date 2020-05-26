<template>
  <div class="container">
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
      <h3 class="mt-3">{{blog.title}}</h3>
      <div>
        <b-img id="myImg" :src="blog.remoteImgUrl" fluid alt="Responsive image"></b-img>
      </div>
      <br />
      <p>{{blog.content}}</p>
      <br />
      <p>Author: {{blog.author}}</p>
      <br />
      <button class="btn mybtn btn-primary mx-2 mb-2" v-on:click="toggle()">To Update</button>
      <button class="btn mybtn btn-primary mb-2" v-on:click="removeBlog">Remove</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SingleBlog",
  data() {
    return {
      id: this.$route.params.id,
      authors: ["Angular", "Vue", "React"],
      show: true
    };
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
        categories: this.blog.categories,
        author: this.blog.author
      });
      this.$router.push("/");
    },
    removeBlog: function() {
      this.deleteBlog(this.id);
      this.$router.push("/");
    },
    // removeImage: function() {
    //   // Create a reference to the file to delete
    //   var desertRef = storageRef.child("images/desert.jpg");

    //   // Delete the file
    //   desertRef
    //     .delete()
    //     .then(function() {
    //       // File deleted successfully
    //     })
    //     .catch(function(error) {
    //       // Uh-oh, an error occurred!
    //     });
    // },

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