<template>
  <div>
    <b-list-group>
      <b-list-group-item v-for="blog of blogs" :key="blog.id">
        <b-card title="All Blog Articles" class="mb-2">
          <router-link v-bind:to="'/blog/'+ blog.id">
            <h4 class="card-title">{{blog.title}}</h4>
          </router-link>
          <b-card-text>{{blog.content}}</b-card-text>
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
      class="mt-4"
    ></b-pagination>
  </div>
</template>
<script>
import { db } from "../db";

export default {
  name: "ShowBlogs",
  data: () => ({ blogs: [], currentPage: 1, rows: 1, perPage: 3 }),
  created: function() {
    db.collection("blogs")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let item = doc.data();
          item.id = doc.id;
          this.blogs.push(item);
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>
