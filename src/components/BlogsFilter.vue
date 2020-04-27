<template>
  <div class="card-body">
    Blogs Filter:
    <b-form-select
      class="my-border"
      :options="FilterArray"
      v-on:change="event => getFilteredBlogs(event)"
    ></b-form-select>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => {
    return {
      FilterArray: [15, 10, 5, 1]
    };
  },
  methods: {
    ...mapActions(["getFilteredBlogs"])
  }
};
</script>
<style>
.my-border {
  border: 1px solid #e6faf4;
}
</style>