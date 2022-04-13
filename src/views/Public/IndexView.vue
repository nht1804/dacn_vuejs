<template>
  <div class="container">
    <div class="banner">
      <img src="@/assets/2355702.webp" alt="banner">
      <div class="banner-content">
        <div class="sample-text">LOGO TEXT</div>
        <div class="search-car">
          <h1>Tìm xe</h1>
          <div class="input-address">
            <n-icon>
              <locationIcon />
            </n-icon>
            <input type="text" placeholder="Nhập địa chỉ">
          </div>
          <div class="input-checkbox">
            <n-checkbox>
              <label style="color:#fff"> Xe có tài xế</label>
            </n-checkbox>
          </div>
          <div class="search-btn">
            <button class="btn btn-b">Tìm ngay</button>
          </div>
        </div>
      </div>
    </div>
    <h1>Địa điểm nổi bật - Xe tự lái</h1>
    <h1>Địa điểm nổi bật - Xe có tài xế</h1>
    <h1>Xe nổi bật - Xe tự lái</h1>
    <h1>Xe nổi bật - Xe có tài xế</h1>
    Bạn muốn cho thuê xe? banner
</div>
</template>

<script>
import { Location as locationIcon, Person as personIcon } from '@vicons/ionicons5'
export default {
  components: {
    locationIcon,
    personIcon
  }
}
</script>

<style scoped>
.container {
  min-height: 50vh;
}

.banner {
  position: relative;
}

.search-car>h1 {
  color: #fff;
  font-size: 20px;
}

img {
  width: 100%;
  max-height: 50vh;
  filter: blur(1px);
}

.banner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35%;
  transform: translate(-50%, -50%);
}

.search-car {
  border-radius: 1px;
  padding: 30px 40px;
  background-color: rgb(0, 0, 0, 0.7);
}

.sample-text {
  text-align: center;
  font-size: 30px;
  color: rgba(255, 255, 255);
  font-weight: bold;
  text-shadow: 1px 0 0 rgb(0, 0, 0);

}

.input-address>input {
  outline: none;
  padding: 5px;
  font-size: 1rem;
  width: 90%;
  color: #fff;
  background-color: transparent;
}

.input-checkbox {
  margin-top: 15px;
}

.search-btn {
  margin-top: 10px;
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

.input-address>i {
  color: #fff;
}

::placeholder {
  color: #fff;
  opacity: 1;
}

.input-address {
  border-bottom: 1px solid #fff;
}
</style>