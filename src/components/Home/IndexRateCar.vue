<template>
  <div class="section-container">
    <div class="section">
      <div class="car-header">
        <h1>Xe nổi bật</h1>
      </div>
      <n-tabs type="line" animated size="large">
        <n-tab-pane name="noDriver" tab="Xe có tài xế">
          <n-grid x-gap="13" y-gap="20" cols="4">
            <n-gi v-for="n in 4" :key="n">
              <n-card title="Car Title" @click="func">
                <template #cover>
                  <img
                    src="https://ict-imgs.vgcloud.vn/2021/12/09/12/hinh-dung-ve-mau-apple-car-dua-tren-bang-sang-che-goc-1.jpg"
                    class="proc-img">
                </template>
                <p>500$</p>
              </n-card>
            </n-gi>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="hasDriver" tab="Xe tự lái">
          <n-grid x-gap="13" y-gap="20" cols="4">
            <n-gi v-for="n in 4" :key="n">
              <n-card title="Car Title" @click="func">
                <template #cover>
                  <img src="https://cms-i.autodaily.vn/du-lieu/2022/04/14/2022-hyundai-ioniq-5-42.jpg" class="proc-img">
                </template>
                <p>Price</p>
              </n-card>
            </n-gi>
          </n-grid>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    func() {
      alert("routerLink")
    }
  }
}
</script>

<style scoped>
.proc-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.n-card {
  width: 250px;
  cursor: pointer;
}

.n-card:hover {
  filter: brightness(95%);
}

.car-header {
  font-size: 25px;
  color: #5d5d5d;
}
</style>