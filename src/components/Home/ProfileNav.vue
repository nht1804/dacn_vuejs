<template>
  <div class="user-nav-opt">
    <div class="router">
      <RouterLink :to="{ name: 'userDetail' }">Thông tin</RouterLink>
      <RouterLink :to="{ name: 'userDetail' }">Đổi mật khẩu</RouterLink>
      <RouterLink :to="{ name: 'history' }">Lịch sử thuê xe</RouterLink>
      <RouterLink :to="{ name: 'carleasing' }">Xe đang thuê</RouterLink>
      <RouterLink :to="{ name: 'login' }" @click="logout">Đăng xuất</RouterLink>
    </div>
  </div>
</template>

<script>
import { useMessage } from "naive-ui";
export default {
  data() {
    return {
      message: useMessage()
    }
  },
  methods: {
    logout() {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      this.message.info("Logout")
    }
  }
}
</script>

<style scoped>
.router-link-exact-active {
  color: #b7a8ff;
  font-weight: bold;
}

a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}

a:hover {
  color: #8075b8;
}



.user-nav-opt {
  position: absolute;
  width: 25%;
  height: 100%;
  margin-top: 50px;
  border-right: solid 1px;
  border-color: rgb(8, 8, 8, 0.1);
  flex-direction: column;
  align-items: center;
  display: flex;
}

.router {
  display: flex;
  flex-direction: column;
}
</style>