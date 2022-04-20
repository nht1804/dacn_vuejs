<template>
  <div class="title">
    Hướng dẫn
  </div>
  <div class="tutorial">
    <div class="customer-tutorial">
      <div class="customer-tutorial-header">
        Dành cho khách hàng muốn thuê xe
      </div>
      <div class="tutorial-step">
        <n-steps>
          <n-step title="Bước 1" description="Đây là bước 1" />
          <n-step title="Bước 2" description="Đây là bước 2, làm gì đó" />
          <n-step title="Bước 3" description="Đây là bước 3, do something" />
          <n-step title="Bước 4" description="Đây là bước 4" />
        </n-steps>
      </div>
    </div>
    <div class="customer-tutorial">
      <div class="customer-tutorial-header">
        Dành cho khách hàng muốn <label> cho thuê xe</label>
      </div>
      <div class="tutorial-step">
        <n-steps>
          <n-step title="Bước 1" description="Đây là bước 1" />
          <n-step title="Bước 2" description="Đây là bước 2, làm gì đó" />
          <n-step title="Bước 3" description="Đây là bước 3, do something" />
          <n-step title="Bước 4" description="Đây là bước 4" />
          <n-step title="Bước 5" description="Đây là bước 5, thêm 1 bước nữa" />
        </n-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
label {
  color: black
}

.title {
  width: 100%;
  background-color: aquamarine;
  padding:30px 0px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
}

.tutorial {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.customer-tutorial-header {
  font-size: 30px;
  color: rgb(176, 99, 248);
  font-weight: bold;
}

.customer-tutorial {
  width: 90%;
  margin-top: 50px;
}

.tutorial-step {
  padding: 10px 50px;
}
</style>