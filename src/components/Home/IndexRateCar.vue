<template>
  <div class="section-container">
    <div class="section">
      <div class="car-header">
        <h1>Xe nổi bật</h1>
      </div>
      <n-tabs type="line" animated size="large">
        <n-tab-pane name="noDriver" tab="Xe có tài xế">
          <n-grid v-if="hasDriverCar" x-gap="13" y-gap="20" cols="4">
            <n-gi v-for="item in hasDriverCar" :key="item.id">
              <n-card :title="item.name" @click="$router.push({ name: 'carDetail', params: { id: item.id } })">
                <template #cover>
                  <img :src="item.image[0]" class="proc-img">
                </template>
                <p>{{ item.price }}$</p>
              </n-card>
            </n-gi>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="hasDriver" tab="Xe tự lái">
          <n-grid v-if="noDriverCar" x-gap="13" y-gap="20" cols="4">
            <n-gi v-for="n in noDriverCar" :key="n">
              <n-card :title="n.name" @click="$router.push({ name: 'carDetail', params: { id: n.id } })">
                <template #cover>
                  <img :src="n.image[0]" class="proc-img">
                </template>
                <p>{{ n.price }}$</p>
              </n-card>
            </n-gi>
          </n-grid>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      hasDriverCar: [],
      noDriverCar: []
    }
  },
  mounted() {
    this.getHasDriverCar()
    this.getNoDriverCar()
  },
  methods: {
    func() {
      alert("routerLink")
    },
    async getHasDriverCar() {
      await axios.get(`http://localhost:8080/api/Car/HotCar?d=true`)
        .then(res => {
          this.hasDriverCar = res.data.data
        })
        .catch(err => {
          console.error(err);
        })
    },
    async getNoDriverCar() {
      await axios.get(`http://localhost:8080/api/Car/HotCar?d=false`)
        .then(res => {
          this.noDriverCar = res.data.data
        })
        .catch(err => {
          console.error(err);
        })
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