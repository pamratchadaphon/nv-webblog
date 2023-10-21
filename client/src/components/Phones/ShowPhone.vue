<template>
  <div>
    <h2>Get Phone</h2>
    <p>รหัสโทรศัพท์ : {{ phone.id }}</p>
    <p>รุ่น : {{ phone.model }}</p>
    <p>ยี่ห้อ : {{ phone.brand }}</p>
    <p>หน่วยความจำ : {{ phone.memory }}</p>
    <p>สี : {{ phone.color }}</p>
    <p>ระบบปฏิบัติการ : {{ phone.operatingSystem }}</p>
    <p>ราคา : {{ phone.price }} บาท</p>
    <p>ขนาดหน้าจอ : {{ phone.screenSize }} นิ้ว</p>
    <p>ความละเอียดหน้าจอ : {{ phone.screenResolution }}</p>
    <p>กล้องหลัก : {{ phone.mainCamera }}</p>
    <p>กล้องหน้า : {{ phone.frontCamera }}</p>
    <p>ความจุแบตเตอรี่ : {{ phone.batteryCapacity }}</p>
    <p>เครือข่าย : {{ phone.network }}</p>
    <p>น้ำหนัก : {{ phone.weight }}</p>
  </div>
</template>
<script>
import PhonesService from "@/services/PhonesService";
export default {
  data() {
    return {
      phone: null,
    };
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
