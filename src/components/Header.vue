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
            <RouterLink to="/">Trang chủ</RouterLink>
            <RouterLink to="/">Xe</RouterLink>
            <RouterLink to="/about">Hướng dẫn</RouterLink>
            <RouterLink to="/about">Giới thiệu</RouterLink>
            <div class="header-right">
                <RouterLink to="/admin">Admin</RouterLink>
                <RouterLink to="/">Đăng nhập</RouterLink>
                <RouterLink to="/">Đăng kí</RouterLink>
                <RouterLink to="/">Hello</RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import { LogoDesignernews as logo } from '@vicons/ionicons5'
export default {
    data() {
        return {
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
</style>