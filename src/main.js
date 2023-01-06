// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    list: [],
    done: false,
    addText: ""
  },
  methods: {
    addToDo: function () {
      this.list.push({
        text: this.addText
      });
    }
  },
  router,
  store,
  components: { App },
  template: "<App/>"
});
