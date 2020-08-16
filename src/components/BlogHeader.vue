<template>
  <b-navbar class="mb-2 my-bg" toggleable="lg" type="dark">
    <b-container>
      <b-navbar-brand href="#">Blogger-app</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">ShowBlogs</b-nav-item>
          <b-nav-item to="/add">AddBlog</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto"></b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<script>
export default {};
</script>
<style>
</style>