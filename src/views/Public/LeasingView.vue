<template>
    <div class="container">
        <n-result :status="status" :title="title" :description="message" size="huge">
            Bạn có thể xem chi tiết yêu cầu của mình tại <RouterLink :to="{ name: 'carleasing' }">Xe đang thuê
            </RouterLink>.
            <template #footer>
                <n-button>
                    <RouterLink :to="{ name: 'index' }">Về trang chủ</RouterLink>
                </n-button>
            </template>
        </n-result>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Yêu cầu của bạn đã được nhận",
            title: "Thành công",
            status: "success",
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
}

.error_title {
    text-align: center;
    font-size: 20vh;
    font-family: 'Courier New', Courier, monospace;
}

.message {
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 50%;
    text-align: center;
}

.error_img>img {
    width: 150px;
}

a {
    text-decoration: none;
    color: rgb(6, 3, 196);
}

a:hover {
    color: rgb(2, 0, 147);
}
</style>