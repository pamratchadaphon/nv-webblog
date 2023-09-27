<template>
  <div>
    <h1>Get User By Id</h1>
    <p>id: {{ user.id }}</p>
    <p>ชื่อ-นามสกุล :{{ user.name }} - {{ user.lastname }}</p>
    <p>email: {{ user.email }}</p>
    <p>password: {{ user.password }}</p>
    <p><button v-on:click="navigateTo('/user/edit/' + user.id)">edit user</button></p>
    <p><button v-on:click="navigateTo('/users')">กลับ</button></p>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: [],
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped></style>
