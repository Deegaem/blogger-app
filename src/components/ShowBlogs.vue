<template>
  <div>
    <h2 class="ml-4 mt-5">Bloglist</h2>
    <!-- <BlogsFilter /> -->
    <b-list-group>
      <b-list-group-item v-for="blog of blogs" :key="blog.id">
        <b-card class="my-border mb-2">
          <router-link :to="'/blog/'+ blog.id">
            <h3 class="card-title">{{blog.title}}</h3>
          </router-link>
          <b-img
            thumbnail 
            right
            width="125"
            height="125"
            :src="blog.remoteImgUrl"
            alt="Right image"
            v-if="blog.imageFlag"
          ></b-img>
          <b-card-text>{{blog.content|snippet}}</b-card-text>
        </b-card>
      </b-list-group-item>
    </b-list-group>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="⏮"
      prev-text="⏪"
      next-text="⏩"
      last-text="⏭"
      class="mt-4 ml-4"
    ></b-pagination>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShowBlogs",
  data: () => {
    return {
      currentPage: 1,
      rows: 1,
      perPage: 3
    };
  },
  computed: mapGetters({ blogs: "getAllBlog" }),
  mounted: function() {
    this.getBlogs();
  },
  methods: {
    ...mapActions(["getBlogs"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a:link {
  text-decoration: none;
}
.list-group-item {
  border: 1px solid #ffff;
}
.my-border {
  border: 1px solid #e6faf4;
}
#my-div{
max-width: 160px;
max-height: 62px;
}
</style>
