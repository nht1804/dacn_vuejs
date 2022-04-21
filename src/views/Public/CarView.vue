<template>
  <div class="c">
    <div class="nav-filter">
      <div class="filter filter_name">
        <div class="filter_title">
          Tên xe
        </div>
        <n-input />
      </div>
      <div class="filter filter_price">
        <div class="filter_title">
          Giá
        </div>
        <n-space vertical>
          <n-slider :value="50" :step="10" />
        </n-space>
      </div>
      <div class="filter filter_seat">
        <div class="filter_title">
          Số chỗ
        </div>
        <n-checkbox v-for="n in 4" :key="n" size="large">
          {{ n }} Chỗ
        </n-checkbox>
      </div>
      <div class="filter filter_hasdrive">
        <div class="filter_title">
          Tài Xế
        </div>
        <n-checkbox v-for="n in 2" :key="n">
          {{ n }} Tài xế
        </n-checkbox>
      </div>
      <div class="filter filter_manufactor">
        <div class="filter_title">
          Hãng xe
        </div>
        <n-select />
      </div>
      <div class="filter filter_cartype">
        <div class="filter_title">
          Truyền động
        </div>
        <n-select />
      </div>
      <div class="filter_button">

      </div>
      <n-button>Bỏ lọc</n-button>
      <n-button>lọc</n-button>
    </div>
    <div class="car-list">
      <n-scrollbar style="height: 100vh">
        <n-grid x-gap="24" y-gap="24" cols="2">
          <n-gi v-for="n in 50" :key="n">
            <n-card title="Car Title">
              <template #cover>
                <img
                  src="https://ict-imgs.vgcloud.vn/2021/12/09/12/hinh-dung-ve-mau-apple-car-dua-tren-bang-sang-che-goc-1.jpg"
                  class="proc-img">
              </template>
              <p>500$</p>
            </n-card>
          </n-gi>
        </n-grid>
      </n-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.c {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.n-card {
  cursor: pointer;
}

.n-card:hover {
  filter: brightness(95%);
}
.n-checkbox {
  font-size: 20px;
  margin: 10px;
}

.filter {
  margin-top: 10px;
}


.filter_title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.nav-filter {
  width: 25%;
  padding: 30px 35px;
}

.car-list {
  width: 55%;
  float: right;
  padding: 30px;
}
</style>