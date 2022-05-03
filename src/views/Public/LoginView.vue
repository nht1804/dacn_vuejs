<template>
  <div class="container">
    <n-card>
      <n-tabs default-value="signin" size="large" justify-content="space-evenly">
        <n-tab-pane name="signin" tab="Đăng nhập">
          <n-form ref="formLoginRef" :model="formLoginValue" :rules="LoginRules">
            <n-form-item-row label="Tên đăng nhập" path="userName">
              <n-input v-model:value="formLoginValue.userName" maxlength="12" placeholder="Tên đăng nhập" />
            </n-form-item-row>
            <n-form-item-row label="Mật khẩu" path="password">
              <n-input type="password" maxlength="12" show-password-on="click" v-model:value="formLoginValue.password"
                placeholder="Mật khẩu" />
            </n-form-item-row>
          </n-form>
          <n-button :disabled="formLoginValue.userName === '' || formLoginValue.password === ''" @click="login"
            type="primary" block secondary strong>
            Đăng nhập
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="Đăng ký">
          <n-form ref="formSignInRef" :model="formSignInValue" :rules="signInRules">
            <n-form-item-row label="Tên đăng nhập" path="userName">
              <n-input v-model:value="formSignInValue.userName" maxlength="12" placeholder="Tên đăng nhập" />
            </n-form-item-row>
            <n-form-item-row label="Mật khẩu" path="password">
              <n-input v-model:value="formSignInValue.password" maxlength="12" type="password" show-password-on="click"
                placeholder="Mật khẩu" />
            </n-form-item-row>
            <n-form-item-row ref="rePasswordRef" label="Nhập lại mật khẩu" path="repassword">
              <n-input v-model:value="formSignInValue.repassword" maxlength="12" type="password" show-password-on="click"
                placeholder="Nhập lại mật khẩu" />
            </n-form-item-row>
          </n-form>
          <n-button
            :disabled="formSignInValue.userName === '' || formSignInValue.password === '' || formSignInValue.repassword === '' || !checkRepassword()"
            @click="signIn" type="primary" block secondary strong>
            Đăng ký
          </n-button>
        </n-tab-pane>
      </n-tabs>
      <RouterLink :to="{ name: 'index' }">Quay lại trang chủ</RouterLink>
    </n-card>


  </div>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';
export default {
  data() {
    return {
      formLoginRef: ref(null),
      rePasswordRef: ref(null),
      formSignInRef: ref(null),
      loginURL: "http://localhost:8080/api/Login",
      userURL: "http://localhost:8080/api/User",
      formLoginValue: ref({
        userName: "nht",
        password: "0123456"
      }),
      formSignInValue: {
        userName: "",
        password: "",
        repassword: ""
      },
      LoginRules: {
        userName: {
          required: true,
          message: "Bạn chưa nhập tên đăng nhập",
          trigger: "blur"
        },
        password: {
          required: true,
          message: "Bạn chưa nhập mật khẩu",
          trigger: "blur"
        }
      },
      signInRules: {
        userName: {
          required: true,
          message: "Bạn chưa nhập tên đăng nhập",
          trigger: "blur"
        },
        password: {
          required: true,
          message: "Bạn chưa nhập mật khẩu",
          trigger: "blur"
        },
        repassword: [{
          required: true,
          message: "Chưa nhập lại mật khẩu",
          trigger: "blur"
        },
        {
          validator: this.checkRepassword,
          message: "Nhập lại mật khẩu không đúng",
          trigger: ["blur", "input"]
        }
        ]
      }
    }
  },
  methods: {
    checkRepassword() {
      return this.formSignInValue.password === this.formSignInValue.repassword;
    },
    async login() {
      axios.post(this.loginURL, this.formLoginValue)
        .then(res => {
          document.cookie = `token=${res.data.data.token}`
          this.$router.push({ name: "index", replace: true })
        })
        .catch(err => {
          console.error(err);
        })
    },
    async signIn() {
      axios.post(this.userURL, this.formSignInValue)
        .then(res => {
          this.$router.go();
        })
        .catch(err => {
          console.error(err);
        })
    }
  }
}
</script>

<style scoped>
a {
  padding: 10px 5px;
  color: black;
  font-size: 15px;
}

a:hover {
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