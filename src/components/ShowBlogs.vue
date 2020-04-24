<template>
  <div>
    <h2 class="ml-4">Blogs List</h2>
    <b-list-group>
      <b-list-group-item v-for="blog of blogs" :key="blog.id">
        <b-card class="my-border mb-2">
          <router-link v-bind:to="'/blog/'+ blog.id">
            <h2 class="card-title">{{blog.title}}</h2>
          </router-link>
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
export default {
  name: "ShowBlogs",
  data() {
    return {
      currentPage: 1,
      rows: 1,
      perPage: 3
    };
  },
  computed: {
    blogs() {
      return this.$store.getters.getAllBlog();
    }
  },
  created: function() {
    this.$store.dispatch("getBlogs");
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
</style>
