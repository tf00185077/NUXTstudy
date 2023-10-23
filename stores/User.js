import { defineStore } from "pinia";
import myFetchClass from "@/settings/fetch";
let myFetch = new myFetchClass();
export const useUserStore = defineStore("userData", () => {
  const token = ref("");
  const userDetail = ref("");
  const getToken = async (userName, password) => {
    token.value =  await myFetch.post(
      "http://192.168.11.51:8029/api/v1/Auth/Login",
      {
        "Content-Type": "application/json", // 指定请求体为 JSON 格式
      },
      JSON.stringify({
        userName,
        password,
      })
    );
  };
  const getUserDetail = async () => {
    userDetail.value = await myFetch.get(
      `http://192.168.11.51:8088/api/v1/Users/UserDetails`,
      {
        Authorization: "Bearer " + token.value,
      }
    );
  };
  return {
    token,
    getToken,
    getUserDetail,
    userDetail,
  };
});
