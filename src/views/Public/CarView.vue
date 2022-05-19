<template>
  <div class="c">
    <div class="nav-filter">
      <div class="filter filter_name">
        <div class="filter_title">
          Tên xe:
        </div>
        <n-input placeholder="Tên xe" v-model:value="name" />
      </div>
      <div class="filter filter_price">
        <div class="filter_title">
          Giá:
        </div>
        <div class="price_range">
          <div class="price_min">
            0$
          </div>
          <div class="price_max">
            {{ price }}$
          </div>
        </div>
        <n-space vertical>
          <n-slider v-model:value="price" :min="0" :max="1000" />
        </n-space>
      </div>
      <div class="filter filter_seat">
        <n-grid cols="3">
          <n-gi>
            <div class="filter_title">
              Số chỗ:
            </div>
          </n-gi>
          <n-gi span="2">
            <n-select v-model:value="seat" :options="SeatOptions" />
          </n-gi>
        </n-grid>
      </div>
      <div class="filter filter_hasdrive">
        <n-grid cols="3">
          <n-gi>
            <div class="filter_title">
              Tài Xế:
            </div>
          </n-gi>
          <n-gi span="2">
            <n-select v-model:value="hasDriver" :options="DriverOptions" />
          </n-gi>
        </n-grid>
      </div>
      <div class="filter filter_manufactor">
        <n-grid cols="3">
          <n-gi>
            <div class="filter_title">
              Hãng xe:
            </div>
          </n-gi>
          <n-gi span="2">
            <n-select v-model:value="manufacturer" :options="ManufacturerOptions" />
          </n-gi>
        </n-grid>
      </div>
      <div class="filter filter_cartype">
        <n-grid cols="3">
          <n-gi>
            <div class="filter_title">
              Truyền động:
            </div>
          </n-gi>
          <n-gi span="2">
            <n-select v-model:value="transmission" :options="TransmissionOptions" />
          </n-gi>
        </n-grid>
      </div>
      <div class="filter_button">
        <n-button :disabled="deleteFilDisable" @click="deleteFilter()">Bỏ lọc</n-button>
        <n-button @click="filter()">lọc</n-button>
      </div>
    </div>
    <div class="car-list">
      <n-scrollbar style="height: 100vh">
        <n-grid x-gap="24" y-gap="24" cols="2">
          <n-gi v-for="item in car" :key="item.id">
            <n-card @click="carDetail(item.id)" :title="item.name">
              <template #cover>
                <img :src="item.image[0]" class="proc-img">
              </template>
              <n-space>
                <n-tag type="success" v-if="item.detail.hasDriver">Có tài xế</n-tag>
                <n-tag type="success" v-if="!item.detail.hasDriver">Xe tự lái</n-tag>
                <n-tag type="success">{{ item.detail.seat }} Chỗ</n-tag>
                <n-tag type="success" v-if="item.detail.transmission === 'automatic'">Số tự động</n-tag>
                <n-tag type="success" v-else>Số sàn</n-tag>
                <n-tag type="info" v-if="item.status === true">Có sẵn</n-tag>
                <n-tag type="error" v-else>Đang được thuê</n-tag>
              </n-space>
              <n-space justify="end">
                <b>{{ item.price }}$/Giờ</b>
              </n-space>
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
      price: 1000,
      name: null,
      seat: null,
      hasDriver: null,
      manufacturer: null,
      transmission: null,
      deleteFilDisable: true,
      SeatOptions: [
        {
          label: '4 Chỗ',
          value: '4'
        },
        {
          label: '5 Chỗ',
          value: '5'
        },
        {
          label: '6 Chỗ',
          value: '6'
        },
        {
          label: '7 Chỗ',
          value: '7'
        }
      ],
      DriverOptions: [
        {
          label: 'Có tài xế',
          value: 'true'
        },
        {
          label: 'Xe tự lái',
          value: 'false'
        }
      ],
      ManufacturerOptions: [],
      TransmissionOptions: [
        {
          label: "Số tự động",
          value: "automatic"
        },
        {
          label: "Số sàn",
          value: "manual"
        }
      ]
    }
  },
  mounted() {
    this.getCar()
    this.getManu()
  },
  methods: {
    deleteFilter() {
      this.price = 1000
      this.name = null
      this.seat = null
      this.hasDriver = null
      this.manufacturer = null
      this.transmission = null
      this.deleteFilDisable = true;
      this.getCar()
    },
    getFilter(oj, value) {
      if (value === null) {
        return ''
      }
      return `&${oj}=${value}`
    },
    getPrice() {
      return `&price=${this.price}`
    },
    getFilString() {
      return this.getPrice() + this.getFilter("name", this.name) + this.getFilter("seat", this.seat) +
        this.getFilter("driver", this.hasDriver) + this.getFilter("manufacturer", this.manufacturer) +
        this.getFilter("transmission", this.transmission)
    },
    async filter() {
      await axios.get(`http://localhost:8080/api/Search/Car?${this.getFilString()}`)
        .then(res => {
          this.car = res.data.data
          this.deleteFilDisable = false;
        })
        .catch(err => {
          console.error(err);
        })
    }
    ,
    async getManu() {
      await axios.get(`http://localhost:8080/api/Car/ManuFactor`)
        .then(res => {
          res.data.data.forEach(x => {
            this.ManufacturerOptions.push({ label: x.id, value: x.id })
          })
        })
        .catch(err => {
          console.error(err);
        })
    },
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
  },
  components: {
  }
}
</script>

<style scoped>
.filter_button {
  display: flex;
  justify-content: center
}

.filter_button * {
  margin: 10px
}

.price_range {
  display: flex;
  justify-content: space-between
}

.n-checkbox {
  font-size: 20px;
  margin: 10px;
}

.filter {
  margin-top: 10px;
}

.filter_title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.nav-filter {
  width: 25%;
  padding: 30px 35px;
}

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

.car-list {
  width: 55%;
  float: right;
  padding: 30px;
}
</style>