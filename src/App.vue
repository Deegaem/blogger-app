<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">ShowBlogs</router-link>|
      <router-link to="/add">AddBlog</router-link>
    </div>
    <div id="center">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#center {
  margin: auto;
  width: 70%;
  border: 3px solid #e6ebe9;
  padding: 10px;
}
</style>
