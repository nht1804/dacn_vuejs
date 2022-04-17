<template>
  <div class="container">
    <n-card>
      <n-tabs default-value="signin" size="large" justify-content="space-evenly">
        <n-tab-pane name="signin" tab="Đăng nhập">
          <n-form>
            <n-form-item-row label="Tên đăng nhập">
              <n-input placeholder="Tên đăng nhập" />
            </n-form-item-row>
            <n-form-item-row label="Mật khẩu">
              <n-input placeholder="Mật khẩu" />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            Đăng nhập
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="Đăng ký">
          <n-form>
            <n-form-item-row label="Tên đăng nhập">
              <n-input placeholder="Tên đăng nhập" />
            </n-form-item-row>
            <n-form-item-row label="Mật khẩu">
              <n-input placeholder="Mật khẩu" />
            </n-form-item-row>
            <n-form-item-row label="Nhập lại mật khẩu">
              <n-input placeholder="Nhập lại mật khẩu" />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong>
            Đăng ký
          </n-button>
        </n-tab-pane>
      </n-tabs>
      <RouterLink :to="{ name: 'index' }">Quay lại trang chủ</RouterLink>
    </n-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
  padding: 10px 5px;
  color: black;
  font-size: 15px;
}
a:hover{
  color: rgb(66, 53, 53);
}
.container {
  background-image: url(../../assets/bg_login.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: center;
}

.n-tabs {
  margin-bottom: 10px;
}

.n-card {
  margin-top: 18vh;
  width: 30%;
}
</style>