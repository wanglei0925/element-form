import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
// import dhf from "@/components/dhf";
// import element from "@/components/elment";
// import qform from "@/components/qform";
// import notFound from "@/components/common/notFound";
const _import = require('./import-' + process.env.NODE_ENV)
const notFound = _import('common/notFound')
const qform = _import('qform')
const element = _import('elment')
const dhf = _import('dhf')
const HelloWorld = _import('HelloWorld')
import userRoute from "./compute"
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
    userRoute,
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
    {
      path:'/notFound',
      name:'notFound',
      component:notFound
    },
    { path: "*", redirect: "/notFound" }
  ]
});
