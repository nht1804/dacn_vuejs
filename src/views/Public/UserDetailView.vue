<template>
    <n-card v-if="user.information">
        <n-grid x-gap="12" y-gap="12" cols="2">
            <n-gi span="2">
                <label>Tên đăng nhập:</label>
                <n-popover trigger="hover">
                    <template #trigger>
                        <n-input disabled placeholder="Tên đăng nhập" :value="user.userName" />
                    </template>
                    <span>Bạn không thể sửa tên đăng nhập</span>
                </n-popover>
            </n-gi>
            <n-gi>
                <label>Họ:</label>
                <n-input placeholder="Họ" v-model:value="user.information.firstName" />
            </n-gi>
            <n-gi>
                <label>Tên:</label>
                <n-input placeholder="Tên" v-model:value="user.information.lastName" />
            </n-gi>
            <n-gi>
                <label>Giới tính:</label>
                <n-select v-model:value="user.information.gender" :options="gender" />
            </n-gi>
            <n-gi>
                <label>Ngày sinh:</label>
                <n-date-picker value-format="yyyy-MM-dd" v-model:formatted-value="user.information.dateOfBirth"
                    type="date" />
            </n-gi>
            <n-gi span="2">
                <label>Địa chỉ:</label>
                <n-input type="textarea" placeholder="Địa chỉ" v-model:value="user.information.address" />
            </n-gi>
            <n-gi span="2">
                <n-button @click="update()" type="primary" block secondary strong>
                    Cập nhật
                </n-button>
            </n-gi>
        </n-grid>
    </n-card>
</template>

<script>
import axios from 'axios'
import { useMessage } from "naive-ui";
export default {
    data() {
        return {
            user: {},
            gender: [{
                label: "Nam",
                value: "MALE"
            },
            {
                label: "Nữ",
                value: "FEMALE"
            },
            {
                label: "Không",
                value: "NONE"
            }],
            message: useMessage()
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        cookie() {
            return Object.fromEntries(
                document.cookie
                    .split("; ")
                    .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
            );
        },
        async getData() {
            axios.get(`http://localhost:8080/api/Login/Check/${this.cookie().token}`)
                .then(res => {
                    this.user = res.data.data;
                })
                .catch(err => {
                    this.message.error(err);
                })
        },
        async update() {
            axios.put("http://localhost:8080/api/User/detail", this.user)
                .then(res => {
                    let status = res.data.status
                    if (status === "SUCCESS") {
                        this.message.success(res.data.message)
                        this.user = {}
                        this.getData();
                    }
                    else {
                        this.message.error(res.data.message)
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
label {
    font-size: 18px;
}

.n-card {
    width: 500px;
}
</style>