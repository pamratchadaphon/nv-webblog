<template>
  <div>
    <h2>Get all Phones</h2>
    <h4>จํานวนโทรศัพท์ {{ phones.length }}</h4>
    <p>
      <button v-on:click="navigateTo('/phone/create')">
        สร้างข้อมูลโทรศัพท์
      </button>
    </p>

    <div v-for="phone in phones" v-bind:key="phone.id">
      <p>รุ่น : {{ phone.model }}</p>
      <p>ยี่ห้อ : {{ phone.brand }}</p>
      <p>สี : {{ phone.color }}</p>
      <p>ราคา : {{ phone.price }} บาท</p>
      <p>
        <button v-on:click="navigateTo('/phone/' + phone.id)">
          ดูข้อมูลโทรศัพท์
        </button>

        <button v-on:click="navigateTo('/phone/edit/' + phone.id)">
          แก้ไขข้อมูลโทรศัพท์
        </button>

        <button v-on:click="deletePhone(phone)">ลบข้อมูลโทรศัพท์</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import PhonesService from "@/services/PhonesService";
export default {
  data() {
    return {
      phones: [],
    };
  },
  async created() {
    try {
      this.phones = (await PhonesService.index()).data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deletePhone(phone) {
      try {
        await PhonesService.delete(phone);
        this.refreshData();
      } catch (err) {
        console.log(err);
      }
    },
    async refreshData() {
      this.phones = (await PhonesService.index()).data;
    },
  },
};
</script>
<style scoped></style>
