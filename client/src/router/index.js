import Vue from "vue";
import Router from "vue-router";
// Users
import UserIndex from "@/components/Users/Index";
import UserCreate from "@/components/Users/CreateUser";
import UserEdit from "@/components/Users/EditUser";
import UserShow from "@/components/Users/ShowUser";

import PhoneIndex from "@/components/Phones/Index";
import PhoneShow from "@/components/Phones/ShowPhone";
import PhoneEdit from "@/components/Phones/EditPhone";
import PhoneCreate from "@/components/Phones/CreatePhone";

import Login from "@/components/Login";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },
    {
      path: "/user/create",
      name: "users-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "user-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "user",
      component: UserShow
    },
    {
      path: "/phones",
      name: "phones",
      component: PhoneIndex
    },
    {
      path: "/phone/create",
      name: "phone-create",
      component: PhoneCreate
    },
    {
      path: "/phone/edit/:phoneId",
      name: "phone-edit",
      component: PhoneEdit
    },
    {
      path: "/phone/:phoneId",
      name: "phone",
      component: PhoneShow
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
