<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <div id="center">
      <b-container>
        <b-row align-v="center">
          <router-view />
        </b-row>
      </b-container>
    </div>
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue";
import BlogFooter from "./components/BlogFooter.vue";

export default {
  components: {
    BlogHeader,
    BlogFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#center {
  margin: auto;
  width: 70%;
  background-color: white;
  border: 3px solid #e6faf4;
  padding: 10px;
}
.list-group-item {
  border: 1px solid width;
}
</style>
