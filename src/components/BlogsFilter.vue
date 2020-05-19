<template>
  <div>
    Filter:
    <b-form-select
      class="myFilterStyle"
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
.myFilterStyle {
  max-width: 10rem;
  border: 1px solid #e6faf4;
}
</style>