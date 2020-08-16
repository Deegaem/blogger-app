<template>
  <b-container>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="blog of blogs" :key="blog.id">
        <template v-slot:img>
          <img class="d-block img-fluid w-100" :src="blog.remoteImgUrl" alt="image slot" />
        </template>
        <router-link :to="'/blog/'+ blog.id">
          <h5>{{blog.title}}</h5>
        </router-link>
        <p>{{blog.content|snippet}}</p>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShowBlogs",
  computed: mapGetters({ blogs: "getAllBlog" }),
  mounted: function () {
    this.getBlogs();
  },
  methods: {
    ...mapActions(["getBlogs"]),
  },
};
</script>

<style scoped lang="scss">
a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: white;
}
</style>
