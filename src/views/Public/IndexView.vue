<template>
  <div class="container">
    <div class="banner">
      <img src="@/assets/2355702.webp" alt="banner" class="banner-img">
      <div class="banner-content">
        <div class="logo-text">{{ welcome_text.toUpperCase() }}</div>
        <n-space justify="center">
          <button class="btn btn-b">Đăng nhập ngay</button>
        </n-space>
      </div>
    </div>
    <n-divider />
    <div class="section-container tutorial">
      <div class="section">
        <div class="section-header tutorial-header">Hướng dẫn thuê xe</div>
        <n-space justify="space-around" size="large">
          <div class="tutorial-content">
            <img src="../../assets/step1.jpg" alt="step1" class="tutorial-img">
            Bước 1:sample text
          </div>
          <div class="tutorial-content">
            <img src="../../assets/step2.jpg" alt="step2" class="tutorial-img">
            Bước 2:sample text
          </div>
          <div class="tutorial-content">
            <img src="../../assets/step3.jpg" alt="step3" class="tutorial-img">
            bước 3: sample text
          </div>
          <div class="tutorial-content">
            <img src="../../assets/step4.jpg" alt="step4" class="tutorial-img">
            Bước 4: sample text
          </div>
        </n-space>
        <button class="btn-more">Xem thêm
          <n-icon>
            <arrowLogo />
          </n-icon>
        </button>
      </div>
    </div>
    <n-divider />
    <div class="section-container">
      <div class="section">
        <div class="section-header car-header">
          Xe tự lái được thuê nhiều
        </div>
        <n-grid x-gap="13" cols="5">
          <n-gi>adu</n-gi>
          <n-gi>adu</n-gi>
          <n-gi>adu</n-gi>
          <n-gi>adu</n-gi>
          <n-gi>adu</n-gi>
        </n-grid>
      </div>
    </div>
    <div class="section-container">
      <div class="section">
        <div class="section-header car-header">
          Xe có tài xế được thuê nhiều
        </div>
        <n-grid x-gap="13" cols="5">
          <n-gi>adu</n-gi>
          <n-gi>adu</n-gi>
          <n-gi>adu</n-gi>
          <n-gi>adu</n-gi>
          <n-gi>adu</n-gi>
        </n-grid>
      </div>
    </div>
    <div class="section-container">
      <div class="section">
        owner
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowForwardCircleOutline as arrowLogo } from '@vicons/ionicons5'
import { Location as locationIcon, Person as personIcon } from '@vicons/ionicons5'
export default {
  data() {
    return {
      welcome_text: "welcome text",
    }
  },
  components: {
    locationIcon,
    personIcon,
    arrowLogo
  }
}
</script>

<style scoped>
.car-header {
  font-size: 25px;
  color: #5d5d5d;
}

.tutorial-header {
  font-size: 35px;
  color: #5d5d5d;
  text-align: center;
}

.btn-more {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-top: 15px;
  float: right;
  border-bottom: solid 2px;
}

.btn-more>.n-icon {
  top: 3px;
}

.btn-more:hover>.n-icon {
  top: 1px;
  color: rgb(88, 88, 88);
}

.btn-more:hover {
  color: rgb(88, 88, 88);
}

.n-divinde {
  width: 80%;
}

.section {
  width: 70%;
  margin: auto;
  padding: 70px 0;
}

.section-container {
  width: 100%;
  margin-top: 50px;
  justify-items: center;
}

.tutorial {
  background-color: aquamarine;
}

.tutorial-content {
  text-align: center;
  display: grid;
  font-size: 20px;
}

.tutorial-img {
  border-radius: 50%;
  width: 200px;
}

.section-header {
  font-weight: bold;
  margin-bottom: 40px;
}

.container {
  min-height: 50vh;
}

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