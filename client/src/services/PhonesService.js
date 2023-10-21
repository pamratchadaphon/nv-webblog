import Api from "@/services/Api";
export default {
  index(search) {
    return Api().get("phones");
  },
  show(phoneId) {
    return Api().get("phone/" + phoneId);
  },
  post(phone) {
    return Api().post("phone", phone);
  },
  put(phone) {
    return Api().put("phone/" + phone.id, phone);
  },
  delete(phone) {
    return Api().delete("phone/" + phone.id, phone);
  },
};
