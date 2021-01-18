import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "@/views/SignIn";
import Home from "@/views/Home";
import NotFound from "@/views/NotFound";
import AdminList from "@/views/admin/List";
import AdminCreate from "@/views/admin/Create";
import TenantList from "@/views/tenant/List";
import TenantDetail from "@/views/tenant/Detail";
import TenantCreate from "@/views/tenant/Create";
import LicenseList from "@/views/license/List";

import { getToken } from "@/utils/cookies";

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
    path: "/tenant/:id",
    name: "TenantDetail",
    component: TenantDetail
  },
  {
    path: "/license/list",
    name: "LicenseList",
    component: LicenseList
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const token = getToken();
  if (to.name === "SignIn" && token) {
    next({ name: "Home" });
    return;
  }
  if (to.name !== "SignIn" && !token) {
    next({ name: "SignIn" });
    return;
  } else next();
});

export default router;
