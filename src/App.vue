<template>
  <div id="app">
    <BlogHeader></BlogHeader>
    <b-container>
      <b-row>
        <b-col class="mybcols" cols="12" col lg="2"></b-col>
        <b-col col lg="8">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
    <BlogFooter></BlogFooter>
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader.vue";
import BlogFooter from "./components/BlogFooter.vue";

export default {
  components: {
    BlogHeader,
    BlogFooter,
  },
};
</script>

<style lang="scss">
@import "./custom.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #686354;
}
h2,
h3 {
  color: #444036;
}

.my-bg {
  background-color: #0d3446 !important;
}

.page-item.active .page-link {
  background-color: #444036 !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #444036;
}
.my-style {
  padding: 1.25rem;
  background-color: #fff;
  border: 1px solid #e6faf4;
  margin-bottom: 3rem;
}
.mybtn:active {
  background-color: #0d3446 !important;
}
.mybcols {
  height: 85vh;
  background-color: #6d685a;
}
@media (max-width: 992px) {
  .mybcols {
    display: none;
  }
}
</style>
