<template>
  <div class="cardetail-wrap">
    <n-grid x-gap="24" y-gap="12" cols="2">
      <n-gi>
        <div class="car_name">
          Tên Xe {{ $route.params.id }}
        </div>
        <table>
          <tbody>
            <tr>
              <th>Đặc điểm</th>
              <td>
                <p>Số ghế: 4</p>
                <p>Truyền động:</p>
              </td>
            </tr>
            <tr>
              <th>Mô tả</th>
              <td> mô tả</td>
            </tr>
            <tr>
              <th>Tài xế</th>
              <td> không </td>
            </tr>
            <tr>
              <th>Chủ sở hữu</th>
              <td> Tên A</td>
            </tr>
          </tbody>
        </table>
        <div class="wrap-btn">
          <button class="lease-btn">Thuê</button>
        </div>
      </n-gi>
      <n-gi>
        <h1>Hình ảnh xe</h1>
        <n-image-group>
          <n-space>
            <n-image v-for="n in 5" :key="n" width="250"
              src="https://ict-imgs.vgcloud.vn/2021/12/09/12/hinh-dung-ve-mau-apple-car-dua-tren-bang-sang-che-goc-1.jpg" />
          </n-space>
        </n-image-group>
      </n-gi>
    </n-grid>
  </div>
  <div class="more-car">
    <div class="more-car_title">
      Xe liên quan
    </div>
    <div class="car_list">
      <n-grid x-gap="13" y-gap="20" cols="4">
        <n-gi v-for="n in 4" :key="n">
          <n-card title="Car Title">
            <template #cover>
              <img src="https://cms-i.autodaily.vn/du-lieu/2022/04/14/2022-hyundai-ioniq-5-42.jpg" class="proc-img">
            </template>
            <p>Price</p>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.n-card{
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
td{
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
  padding: 100px 10px;
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