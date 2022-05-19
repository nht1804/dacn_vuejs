<template>
  <div class="cardetail-wrap" v-if="car.detail">
    <n-grid x-gap="24" y-gap="12" cols="2">
      <n-gi>
        <div class="car_name">
          {{ car.name }}
        </div>
        <table>
          <tbody>
            <tr>
              <th>Đặc điểm:</th>
              <td>
                <n-space>
                  <n-tag type="success">{{ car.detail.seat }} Chỗ</n-tag>
                  <n-tag type="success" v-if="car.detail.transmission === 'automatic'">Số tự động</n-tag>
                  <n-tag type="success" v-else>Số sàn</n-tag>
                </n-space>
              </td>
            </tr>
            <tr>
              <th>Mô tả:</th>
              <td>{{ car.detail.about }}</td>
            </tr>
            <tr>
              <th>Tài xế:</th>
              <td>
                <n-tag type="success" v-if="car.detail.hasDriver">Có tài xế</n-tag>
                <n-tag type="success" v-else>không tài xế</n-tag>
              </td>
            </tr>
            <tr>
              <th>Giá thuê:</th>
              <td><b>{{ car.price }}$/Giờ</b></td>
            </tr>
          </tbody>
        </table>
        <div class="wrap-btn">
          <button @click="lease()" class="lease-btn">Thuê</button>
        </div>
      </n-gi>
      <n-gi>
        <h1>Hình ảnh xe</h1>
        <n-image-group>
          <n-space>
            <n-image v-for="img in car.image" :key="img" width="250" :src="img" />
          </n-space>
        </n-image-group>
      </n-gi>
    </n-grid>
  </div>
  <div class="more-car">
    <div class="more-car_title">
      Xe ngẫu nhiên
    </div>
    <div class="car_list">
      <n-grid x-gap="13" y-gap="20" cols="4">
        <n-gi v-for="n in randomCar" :key="n">
          <n-card :title="n.name" @click="$router.push({ name: 'carDetail', params: { id: n.id } })">
            <template #cover>
              <img :src="n.image[0]" class="proc-img">
            </template>
            <p>{{ n.price }}$</p>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script>
import { useMessage } from "naive-ui";
import axios from "axios"
export default {
  data() {
    return {
      randomCar: [],
      car: {},
      bill: {},
      userName: null,
      URL: `http://localhost:8080/api/Car/id/`,
      message: useMessage(),
    }
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        location.reload();
      }
    }
  },
  mounted() {
    this.getCarDetail();
    this.getRandomCar(4);
  },
  methods: {
    onCompleteReload() {
      if (this.existingData) {
        this.$router.go(0)
      }
    },
    async getRandomCar(size) {
      {
        axios.get(`http://localhost:8080/api/Car/random?size=${size}`)
          .then(res => {
            this.randomCar = res.data.data
          })
          .catch(err => {
            console.error(err);
          })
      }
    }
    ,
    cookie() {
      return Object.fromEntries(
        document.cookie
          .split("; ")
          .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
      );
    },
    async getCarDetail() {
      axios.get(this.URL + this.$route.params.id)
        .then(res => {
          this.car = res.data.data;
        })
        .catch(err => {
          console.error(err);
        })
    },
    async addBill(value, userName) {
      value.customerID = userName
      value.carID = this.$route.params.id
      axios.post(`http://localhost:8080/api/Bill`, value).then(res => {
        this.$router.push({ name: 'carleasing' })
      }).catch(err => { console.error(err); })
    },
    async checkBill(userName) {
      axios.get(`http://localhost:8080/api/Bill/u=${userName}`).then(res_bill => {
        if (res_bill.data.data !== null) {
          let bill = res_bill.data.data[0];
          if (bill.status === "WAITING" || bill.status === "PROCESSING") {
            this.message.error("Bạn đang thuê 1 xe", { duration: 5000 })
            this.$router.push({ name: 'carleasing' })
          } else {
            this.addBill(this.bill, userName)
            this.message.success(`Thành công`)
          }
        } else {
          this.addBill(this.bill, userName)
          this.message.success(`Thành công`)
        }
      }).catch(err => { console.error(err); })
    }
    ,
    async lease() {
      axios.get(`http://localhost:8080/api/Login/Check/${this.cookie().token}`).then(jwt => {
        if (jwt.data.data !== null) {
          this.checkBill(jwt.data.data.userName)
        }
        else {
          this.message.error("Bạn chưa đăng nhập")
          this.$router.push({ name: 'login' })
        }
      }).catch(err => this.message.error(err))
    },
  }
}
</script>

<style scoped>
.n-card {
  cursor: pointer;
}

.n-card:hover {
  filter: brightness(95%);
}

.more-car {
  width: 80%;
  margin: auto;
  margin-top: 100px;
}

.more-car_title {
  font-size: 30px;
  font-weight: bold;
}

.car_name {
  font-size: 50px;
  font-weight: bold;
  word-wrap: break-word;
}

h1 {
  font-size: 30px;
}

.lease-btn {
  padding: 10px 0px;
  width: 50%;
  margin: auto;
  cursor: pointer;
  background-color: #00a550;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 20px;
  border-radius: 5px;
  margin: auto;
}

td {
  word-wrap: break-word;
}

.lease-btn:hover {
  background-color: #008741;
}

.wrap-btn {
  width: 100%;
  display: flex;
}

table {
  padding: 50px 10px;
}

.cardetail-wrap {
  width: 80%;
  min-height: 50vh;
  margin: auto;
  padding: 10px;
  margin-top: 50px;
}

th,
td {
  font-size: 1.2rem;
  text-align: left;
  padding: 10px;
}

th {
  width: 25%;
  color: rgb(75, 75, 75)
}
</style>