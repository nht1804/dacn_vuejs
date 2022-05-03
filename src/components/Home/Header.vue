<template>
    <div class="header">
        <div class="header-logo">
            <h1>
                <n-icon>
                    <logo />
                </n-icon>Logo
            </h1>
        </div>
        <div class="header-menu">
            <RouterLink :to="{ name: 'index' }">Trang chủ</RouterLink>
            <RouterLink :to="{ name: 'car' }">Xe</RouterLink>
            <RouterLink :to="{ name: 'tutorial' }">Hướng dẫn</RouterLink>
            <RouterLink :to="{ name: 'about' }">Giới thiệu</RouterLink>
            <div class="header-right">
                <RouterLink v-if="roleLevel <= 1 && roleLevel !== ''" :to="{ name: 'dashboard' }">Admin</RouterLink>
                <RouterLink v-if="userName === ''" :to="{ name: 'login' }">Đăng nhập</RouterLink>
                <RouterLink v-if="userName !== ''" :to="{ name: 'userDetail' }">Hello {{ userName }}</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { LogoDesignernews as logo } from '@vicons/ionicons5'
import axios from 'axios';
export default {
    data() {
        return {
            userName: "",
            roleLevel: "",
            checkLoginURL: "http://localhost:8080/api/Login/Check/"
        }
    },
    mounted() {
        this.checkLog()
    },
    methods: {
        async checkLog() {
            let token = this.cookie().token
            axios.get(this.checkLoginURL + token)
                .then(res => {
                    if (res.data.status === "SUCCESS") {
                        this.userName = res.data.data.userName
                        this.roleLevel = res.data.data.role.roleLevel
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        },
        cookie() {
            return Object.fromEntries(
                document.cookie
                    .split("; ")
                    .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
            );
        }
    },
    components: {
        logo
    }
}
</script>

<style scoped>
.header {
    background-color: black;
    overflow: hidden;
}

.header-logo {
    color: #b7a8ff;
    margin-left: 30px;
    font-size: 50px;
    float: left;
}

.header-right {
    float: right;
}

.header-menu {
    padding: 30px 10px;
    margin-left: 200px;
}

a {
    text-decoration: none;
    color: aliceblue;
    font-size: 18px;
    padding: 18px;
}

a:hover {
    color: aquamarine;
}

.router-link-exact-active {
    color: #b7a8ff;
}
</style>