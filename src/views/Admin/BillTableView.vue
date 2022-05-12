<template>
    <n-layout-content class="content">
        <n-divider title-placement="left">
            <h1>Waiting Bills:</h1>
        </n-divider>
        <Bill :url="findByStatus" status="WAITING" />
        <n-divider title-placement="left">
            <h1>Processing Bills:</h1>
        </n-divider>
        <Bill :url="findByStatus" status="PROCESSING" />
        <n-divider title-placement="left">
            <h1>Canceled bills:</h1>
        </n-divider>
        <Bill :url="findByStatus" status="CANCELED" />
        <n-divider title-placement="left">
            <h1>Paid bills:</h1>
        </n-divider>
        <Bill :url="findByStatus" status="PAID" />
        <n-divider title-placement="left">
            <h1>All bills:</h1>
        </n-divider>
        <Bill :url="findAll" status="" />
    </n-layout-content>
</template>

<script>
import Bill from '@/components/BillTable.vue'
export default {
    data() {
        return {
            findByStatus: 'http://localhost:8080/api/Bill/status/',
            findAll:'http://localhost:8080/api/Bill'
        }
    },
    components: { Bill }
}
</script>

<style>
.content {
    margin-left: 400px;
    margin-right: 100px;
}
</style>