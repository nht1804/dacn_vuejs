<template>
    <div class="banner">
        <img src="@/assets/2355702.webp" alt="banner" class="banner-img">
        <div class="banner-content">
            <div v-if="!userName" class="logo-text">{{ welcome_text.toUpperCase() }}</div>
            <div v-if="(Bill.status === 'PAID' || Bill.status === 'CANCELED' || !Bill) && userName"
                class="logo-text">Bạn chưa
                thuê xe nào</div>
            <div v-if="(Bill.status === 'WAITING' || Bill.status === 'PROCESSING' || !Bill) && userName"
                class="logo-text">Bạn đang thuê 1 xe</div>
            <n-space justify="center">
                <button @click="$router.push('login')" v-if="!userName" class="btn btn-b">Đăng nhập ngay</button>
                <button @click="$router.push('car')" v-if="(Bill.status === 'PAID' || Bill.status === 'CANCELED' || !Bill) && userName"
                    class="btn btn-b">Thuê
                    xe ngay</button>
                <button @click="$router.push('carleasing')" v-if="(Bill.status === 'WAITING' || Bill.status === 'PROCESSING' || !Bill) && userName"
                    class="btn btn-b">
                    Xem xe đang thuê
                </button>
            </n-space>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            welcome_text: "Welcome text",
            Bill: {},
            userName: null,
        }
    },
    mounted() {
        this.checkLog();
    },
    methods: {
        cookie() {
            return Object.fromEntries(
                document.cookie
                    .split("; ")
                    .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
            );
        },
        async checkLog() {
            let token = this.cookie().token
            axios.get(`http://localhost:8080/api/Login/Check/${token}`)
                .then(res => {
                    if (res.data.status === "SUCCESS") {
                        this.userName = res.data.data.userName
                        this.getBills(res.data.data.userName);
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async getBills(userName) {
            await axios.get(`http://localhost:8080/api/Bill/u=${userName}`)
                .then(res => {
                    if (res.data.data !== null) {
                        this.Bill = res.data.data[0];
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
}
</script>

<style scoped>
.banner {
    position: relative;
}


.banner-img {
    width: 100%;
    max-height: 80vh;
    filter: blur(1px);
}

.banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
}


.logo-text {
    text-align: center;
    font-size: 50px;
    color: rgba(255, 255, 255);
    font-weight: bold;
    text-shadow: 1px 0 0 rgb(0, 0, 0);
}

.btn {
    padding: 10px 30px;
    cursor: pointer;
    background-color: black;
    color: #fff;
    border-radius: 10px;
    border: 2px solid black;
}

.btn-b {
    border-color: #ffffff;
}

.btn:hover {
    background-color: rgb(52, 52, 52);
}
</style>