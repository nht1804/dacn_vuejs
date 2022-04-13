<template>
    <footer>
        <div class="container">
            <n-grid x-gap="12" cols="3">
                <n-gi>
                    <div class="footer-logo">
                        <h1>
                            <n-icon>
                                <logo />
                            </n-icon>LOGO
                        </h1>
                    </div>
                    <a href="https://vuejs.org" target="_blank">Vue.js</a>
                    <n-divider vertical />
                    <a href="https://www.mongodb.com" target="_blank">MongoDB</a>
                    <n-divider vertical />
                    <a href="https://spring.io" target="_blank">Spring</a>
                </n-gi>
                <n-gi span="2">
                    <n-grid x-gap="12" cols="3">
                        <n-gi>
                            <h2>Github</h2>
                            <ul>
                                <li>
                                    <a href="https://github.com/nht1804/dacn_spring.git" target="_blank">
                                        <n-icon>
                                            <gitLogo />
                                        </n-icon>Spring
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/nht1804/dacn_vuejs.git" target="_blank">
                                        <n-icon>
                                            <gitLogo />
                                        </n-icon>VueJS
                                    </a>
                                </li>
                            </ul>
                        </n-gi>
                        <n-gi span="2">
                            <h2>Liên hệ</h2>
                            <ul>
                                <li>
                                    <a href="https://github.com/nht1804" target="_blank">
                                        <n-icon>
                                            <gitLogo />
                                        </n-icon>Github
                                    </a>
                                </li>
                                <li>
                                    <n-icon>
                                        <mailLogo />
                                    </n-icon>Email: nhthuong1804@gmail.com
                                </li>

                                <li>
                                    <n-icon>
                                        <mapIcon />
                                    </n-icon>Địa chỉ: 331 Quốc lộc 1A, P. An Phú Đông, Q.12
                                </li>
                            </ul>
                        </n-gi>
                    </n-grid>
                </n-gi>
                <n-gi span="3">
                    <n-divider />© Nguyễn Hoài Thương - Đại học Nguyễn Tất Thành - Khoa Công Nghệ Thông Tin
                </n-gi>
            </n-grid>
        </div>
    </footer>
</template>

<script>
import {
    LogoDesignernews as logo,
    LogoGithub as gitLogo,
    Mail as mailLogo,
    Map as mapIcon
} from '@vicons/ionicons5'
export default {
    data() {
        return {
        }
    },
    components: {
        logo,
        gitLogo,
        mailLogo,
        mapIcon
    }
}
</script>

<style scoped>
footer {
    position: relative;
    width: 100%;
    bottom: -100px;
    overflow: hidden;
    background-color: black;
    height: 300px;
}
footer * {
    color: aliceblue;
}
.footer-logo {
    font-size: 50px;
}
.container {
    margin: 50px;
}
li {
    list-style: none;
}
a:hover {
    color: aquamarine;
}
h2,
a,
li {
    text-decoration: none;
    font-size: 20px;
}
</style>