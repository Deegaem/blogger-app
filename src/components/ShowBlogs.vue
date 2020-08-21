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
          <div class="ratio">
            <img
              class="d-block img-fluid w-100 ratio_content"
              :src="blog.remoteImgUrl"
              alt="image slot"
            />
          </div>
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
.ratio {
  position: relative;
  display: block;
}
.ratio:before {
  content: "";
  display: block;
  width: 100%;
  padding-bottom: 46.87%;
  background: #6d685a;
}
.ratio_content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
