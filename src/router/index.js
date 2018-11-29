import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import dhf from "@/components/dhf";
import element from "@/components/elment";
import qform from "@/components/qform";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/dhf",
      name: "dhf",
      component: dhf
    },
    {
      path: "/qform",
      name: "qform",
      component: qform
    },
    {
      path: "/element",
      name: "element",
      component: element
    },
    {
      path: "",
      redirect: "/"
    },
    { path: "*", redirect: "/" }
  ]
});
