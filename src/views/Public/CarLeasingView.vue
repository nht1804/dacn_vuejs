<template>
  <div class="car-leasing">
    <n-grid x-gap="12" y-gap="12" cols="2">
      <n-gi>
        <table>
          <tbody>
            <tr>
              <th>Tên xe:</th>
              <td> Xe abc </td>
            </tr>
            <tr>
              <th>Số ghế:</th>
              <td> số </td>
            </tr>
            <tr>
              <th>Tài xế:</th>
              <td> không </td>
            </tr>
            <tr>
              <th>Chủ sở hữu:</th>
              <td> Tên AAAAAAAAAAAAAAA</td>
            </tr>
            <tr>
              <th>Thời gian nhận xe:</th>
              <td> 00/00/0000 </td>
            </tr>
            <tr>
              <th>Thời gian đang thuê:</th>
              <td> 00:00:00 </td>
            </tr>
          </tbody>
        </table>
      </n-gi>
      <n-gi><img src="@/assets/car.jpg" alt="car"></n-gi>
    </n-grid>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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