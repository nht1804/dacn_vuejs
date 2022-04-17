<template>
    <div class="banner">
        <img src="@/assets/2355702.webp" alt="banner" class="banner-img">
        <div class="banner-content">
            <div class="logo-text">{{ welcome_text.toUpperCase() }}</div>
            <n-space justify="center">
                <button class="btn btn-b">Đăng nhập ngay</button>
            </n-space>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      welcome_text: "welcome text",
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