<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <div id="my-wrapper">
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
@import "./custom.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h2,
h3 {
  color: #17a2b8;
}

.page-item.active .page-link {
  background-color: #17a2b8 !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #17a2b8;
}

#my-wrapper {
  margin: auto;
  width: 70%;
  background-color: white;
  border: 3px solid #e6faf4;
  padding: 10px;
}
.list-group-item {
  border: 1px solid width;
}
.my-style {
  padding: 1.25rem;
  background-color: #fff;
  border: 1px solid #e6faf4;
  margin-bottom: 3rem;
}

.mybtn:active {
  background-color: #3e6a8e !important;
}
</style>
