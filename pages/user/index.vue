<script setup>
const route = useRoute();
const userStore = useUserStore();
// const token = userStore.token
const user = ref("garyyang@funday.asia");
const password = ref("0979526393");
const userData = reactive({});
const tokenHandler = async (e) => {
  e.preventDefault();
  await userStore.getToken(user.value, password.value);
};
</script>
<template>
  <div>
    <h1>This is user main page</h1>
    <label for="account"> Account Name: </label>
    <input id="account" type="text" v-model="user" />
    <label for="password"> Password: </label>
    <input id="password" type="text" v-model="password" />
  </div>
  <div>
    <button @click="tokenHandler">Get Token</button>
    <p v-if="userStore.token">your token:{{ userStore.token }}</p>
  </div>
  <div v-if="userData">
    <p v-for="(value, index) in userData" :key="index">{{ value }}</p>
  </div>
  <div>
    <button @click="userStore.getUserDetail">Show UserDetail</button>
  </div>
  <div v-if="userStore.userDetail">
    <p v-for="(value, key) in userStore.userDetail">{{ key }}:{{ value }}</p>
  </div>
</template>
