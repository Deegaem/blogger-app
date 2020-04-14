<template>
  <div class="container">
    <h1>All Blog Articles</h1>
    <ul>
      <li v-for="blog of blogs" :key="blog.id">
        <div class="card mb-2">
          <div class="card-body">
            <router-link v-bind:to="'/blog/'+ blog.id">
              <h4 class="card-title">{{blog.title}}</h4>
            </router-link>
            <p class="card-text">{{blog.content}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  name: "ShowBlogs",
  data: () => ({ blogs: [] }),
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
