import Vue from "vue";
import Router from "vue-router";
//コンポーネントの読み込み
import Home from "./components/home.vue";
import Index from "./components/index.vue";
import New from "./components/new.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/todos", name: "Index", component: Index },
    { path: "/new", name: "New", component: New }
  ]
});
