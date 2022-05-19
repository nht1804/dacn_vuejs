<template>
  <div class="car-leasing">
    <n-grid x-gap="12" y-gap="12" cols="2"
      v-if="(Bill && car.detail) && (Bill.status === 'PROCESSING' || Bill.status === 'WAITING')">
      <n-gi>
        <table>
          <tbody>
            <tr>
              <th>Tên xe:</th>
              <td>
                <router-link :to="{ name: 'carDetail', params: { id: car.id } }"> {{ car.name }}</router-link>
              </td>
            </tr>
            <tr>
              <th>Số ghế:</th>
              <td> {{ car.detail.seat }} </td>
            </tr>
            <tr>
              <th>Tài xế:</th>
              <td>
                <n-tag type="success" v-if="car.detail.hasDriver">Có tài xế</n-tag>
                <n-tag type="success" v-else>không tài xế</n-tag>
              </td>
            </tr>
            <tr>
              <th>Trạng thái:</th>
              <td>
                <n-tag type="warning" v-if="Bill.status === 'WAITING'">Đang chờ duyệt</n-tag>
                <n-tag type="success" v-if="Bill.status === 'PROCESSING'">Đang thuê</n-tag>
              </td>
            </tr>
            <tr v-if="Bill.acceptDate !== null">
              <th>Thời gian nhận xe:</th>
              <td>
                <n-time :time="new Date(Bill.acceptDate).getTime()" format="hh:mm dd-MM-yyyy" />
              </td>
            </tr>
            <tr v-if="Bill.acceptDate !== null">
              <th>Thời gian đang thuê:</th>
              <td>{{ Math.floor(((now - new Date(Bill.acceptDate).getTime()) / (60 * 60 * 1000))) }}h:
                {{ Math.floor(((now - new Date(Bill.acceptDate).getTime()) / (60 * 1000)) % 60) }}p:
                {{ Math.floor(((now - new Date(Bill.acceptDate).getTime()) / 1000) % 60) }}s</td>
            </tr>
          </tbody>
        </table>
      </n-gi>
      <n-gi><img :src="car.image[0]" alt="car"></n-gi>
    </n-grid>
    <h1 class="message" v-else>Bạn không có yêu cầu duyệt hoặc đang không thuê xe nào. Bạn có thể thuê xe tại
      <router-link :to="{ name: 'car' }">Đây</router-link>,
      hoặc bạn có thể xem qua <router-link :to="{ name: 'tutorial' }">hướng dẫn thuê xe</router-link> của chúng tôi.
    </h1>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      Bill: {},
      car: {},
      now: new Date().getTime(),
    }
  },
  mounted() {
    this.getBills();
  },
  methods: {
    async getBills() {
      await axios.get(`http://localhost:8080/api/Bill/u=${this.$route.meta.userName}`)
        .then(res => {
          if (res.data.data !== null) {
            this.Bill = res.data.data[0];
            axios.get(`http://localhost:8080/api/Car/id/${res.data.data[0].carID}`)
              .then(res => {
                this.car = res.data.data;
              })
          }
        })
        .catch(err => {
          console.error(err);
        })
    },
  },
  watch: {
    now: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.now = new Date().getTime();
          }, 1000);
        }
      },
      immediate: true
    }
  }

}
</script>

<style scoped>
.message {
  font-size: 30px;
}

a {
  text-decoration: none;
  color: rgb(0, 55, 255)
}

img {
  width: 100%;
}

table {
  width: 100%
}

td,
th {
  font-size: 20px;
  padding: 15px;
}

th {
  text-align: left;
}

.car-leasing {
  width: 90%;
}

.n-card {
  width: 30%;
}
</style>