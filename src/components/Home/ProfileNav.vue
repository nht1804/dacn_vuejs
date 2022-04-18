<template>
    <div class="user-nav-opt">
        <div class="router">
            <RouterLink :to="{ name: 'userDetail' }">Thông tin</RouterLink>
            <RouterLink :to="{ name: 'history' }">Lịch sử thuê xe</RouterLink>
            <RouterLink :to="{ name: 'carleasing' }">Xe đang thuê</RouterLink>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-exact-active {
  color: #b7a8ff;
}

a {
  text-decoration: none;
  color: black;
  font-size: 20px;
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