<template>
  <div class="section-container">
    <div class="owner-bg">
      <div class="owner-content">
        <h1> Bạn muốn cho thuê xe ô tô?</h1>
        <p> <a href="#" class="signnow-link">Đăng ký ngay</a> để trở thành đối tác của chúng tôi.</p>
        <button @click="test()" class="more-btn">Tìm hiểu thêm</button>
        <button class="signnow-btn">Đăng ký ngay</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log(this.$store.state.userName)
    }
  }
}
</script>

<style scoped>
.section-container {
  width: 100%;
  margin-top: 50px;
  justify-items: center;
}

.owner-content>h1 {
  color: rgb(255, 255, 255);
  font-size: 40px;
}

.owner-content>p {
  color: rgb(255, 255, 255);
  font-size: 20px;
}

.owner-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../../assets/car.jpg);
  background-size: cover;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.owner-content>button {
  padding: 15px 40px;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
  border: solid 1px;
  border-color: #fff;
}

.signnow-link {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: bold;
}

.more-btn {
  background-color: rgb(0, 0, 19);
  color: #fff;
  font-weight: bold;
}

.more-btn:hover {
  background-color: rgb(36, 36, 36);
}

.signnow-btn {
  color: rgb(0, 0, 19);
  font-weight: bold;
}

.signnow-btn:hover {
  background-color: #c3c3c3;
}

.owner-content {
  right: 100%;
  width: 40%;
  background-color: rgb(29, 29, 29, 0.1);
  margin-right: 50px;
}
</style>