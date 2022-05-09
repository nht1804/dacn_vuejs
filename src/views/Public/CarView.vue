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
          <n-gi v-for="item in car" :key="item.id">
            <n-card @click="carDetail(item.id)" :title="item.name">
              <template #cover>
                <img :src="item.image[0]" class="proc-img">
              </template>
              <p>{{ item.price }}$/Giờ</p>
            </n-card>
          </n-gi>
        </n-grid>
      </n-scrollbar>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useMessage } from 'naive-ui'
export default {
  data() {
    return {
      car: {},
      carURL: 'http://localhost:8080/api/Car',
      message: useMessage(),
    }
  },
  mounted() {
    this.getCar()
  },
  methods: {
    async getCar() {
      axios.get(this.carURL)
        .then(res => {
          this.car = res.data.data;
        })
        .catch(err => {
          this.message.error(err);
        })
    },
    carDetail(itemId) {
      this.$router.push({ name: 'carDetail', params: { id: itemId } })
    }
  }
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