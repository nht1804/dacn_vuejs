<template>
    <n-card>
        <n-grid x-gap="12" y-gap="12" cols="2">
            <n-gi span="2">
                <label>Tên đăng nhập:</label>
                <n-popover trigger="hover">
                    <template #trigger>
                        <n-input disabled placeholder="Tên đăng nhập" />
                    </template>
                    <span>Bạn không thể sửa tên đăng nhập</span>
                </n-popover>
            </n-gi>
            <n-gi>
                <label>Họ:</label>
                <n-input placeholder="Họ" />
            </n-gi>
            <n-gi>
                <label>Tên:</label>
                <n-input placeholder="Tên" />
            </n-gi>
            <n-gi>
                <label>Giới tính:</label>
                <n-select />
            </n-gi>
            <n-gi>
                <label>Ngày sinh:</label>
                <n-date-picker type="date" />
            </n-gi>
            <n-gi span="2">
                <label>Địa chỉ:</label>
                <n-input type="textarea" placeholder="Địa chỉ" />
            </n-gi>
            <n-gi span="2">
                <n-button type="primary" block secondary strong>
                    Cập nhật
                </n-button>
            </n-gi>
        </n-grid>
    </n-card>
</template>

<script>
export default {

}
</script>

<style scoped>
label {
  font-size: 18px;
}

.n-card {
  width: 500px;
}
</style>