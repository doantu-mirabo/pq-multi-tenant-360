import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "@/views/SignIn";
import Home from "@/views/Home";
import AdminList from "@/views/admin/List";
import AdminCreate from "@/views/admin/Create";
import TenantList from "@/views/tenant/List";
import TenantCreate from "@/views/tenant/Create";
import ContactList from "@/views/contact/List";
import ContactCreate from "@/views/contact/Create";

Vue.use(VueRouter);

const routes = [
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin/list",
    name: "AdminList",
    component: AdminList
  },
  {
    path: "/admin/create",
    name: "AdminCreate",
    component: AdminCreate
  },
  {
    path: "/tenant/list",
    name: "TenantList",
    component: TenantList
  },
  {
    path: "/tenant/create",
    name: "TenantCreate",
    component: TenantCreate
  },
  {
    path: "/contact/list",
    name: "ContactList",
    component: ContactList
  },
  {
    path: "/contact/create",
    name: "ContactCreate",
    component: ContactCreate
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // config middleware here
  next();
});

export default router;
