<template>
  <div>
    <h1>Edit Phone</h1>
    <form v-on:submit.prevent="editPhone">
      <p>รุ่น : <input type="text" v-model="phone.model" /></p>
      <p>ยี่ห้อ : <input type="text" v-model="phone.brand" /></p>
      <p>หน่วยความจำ : <input type="text" v-model="phone.memory" /></p>
      <p>สี : <input type="text" v-model="phone.color" /></p>
      <p>ระบบปฏิบัติการ : <input type="text" v-model="phone.operatingSystem" /></p>
      <p>ราคา : <input type="text" v-model="phone.price" /> บาท</p>
      <p>ขนาดหน้าจอ : <input type="text" v-model="phone.screenSize" /> นิ้ว</p>
      <p>ความละเอียดหน้าจอ : <input type="text" v-model="phone.screenResolution" /></p>
      <p>กล้องหลัก : <input type="text" v-model="phone.mainCamera" /></p>
      <p>กล้องหน้า : <input type="text" v-model="phone.frontCamera" /></p>
      <p>ความจุแบตเตอรี่ : <input type="text" v-model="phone.batteryCapacity" /></p>
      <p>เครือข่าย : <input type="text" v-model="phone.network" /></p>
      <p>น้ำหนัก : <input type="text" v-model="phone.weight" /></p>
      <p><button type="submit">edit phone</button></p>
    </form>
    <hr />
    <div>
      <p>รุ่น : {{ phone.model }}</p>
      <p>ยี่ห้อ : {{ phone.brand }}</p>
      <p>หน่วยความจำ : {{ phone.memory }}</p>
      <p>สี : {{ phone.color }}</p>
      <p>ระบบปฏิบัติการ : {{ phone.operatingSystem }}</p>
      <p>ราคา : {{ phone.price }}</p>
      <p>ขนาดหน้าจอ : {{ phone.screenSize }}</p>
      <p>ความละเอียดหน้าจอ : {{ phone.screenResolution }}</p>
      <p>กล้องหลัก : {{ phone.mainCamera }}</p>
      <p>กล้องหน้า : {{ phone.frontCamera }}</p>
      <p>ความจุแบตเตอรี่ : {{ phone.batteryCapacity }}</p>
      <p>เครือข่าย : {{ phone.network }}</p>
      <p>น้ำหนัก : {{ phone.weight }}</p>
    </div>
  </div>
</template>
<script>
import PhonesService from "@/services/PhonesService";

export default {
  data() {
    return {
      phone: {
        model:"",
        brand:"",
        memory:"",
        color:"",
        operatingSystem:"",
        price:"",
        screenSize:"",
        screenResolution:"",
        mainCamera:"",
        frontCamera:"",
        batteryCapacity:"",
        network:"",
        weight:""
      },
    };
  },
  methods: {
    async editPhone() {
      try {
        await PhonesService.put(this.phone);
        this.$router.push({ name: "phones" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  async created() {
    try {
      let phoneId = this.$route.params.phoneId;
      this.phone = (await PhonesService.show(phoneId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped></style>
