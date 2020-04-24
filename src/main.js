import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.filter("snippet", function(value) {
  return value.slice(0, 100) + "...";
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
