<template>
    <n-watermark content="Dashboard" cross selectable :font-size="16" :line-height="16" :width="192" :height="128"
        :x-offset="12" :y-offset="28" :rotate="-15">
        <n-layout-content class="content">
            <n-grid x-gap="24" y-gap="24" cols="4">
                <n-gi>
                    <total :name="'Bill'" :url="'http://localhost:8080/api/DashBoard/Bill/total'" />
                </n-gi>
                <n-gi>
                    <total :name="'Car'" :url="'http://localhost:8080/api/DashBoard/Car/total'" />
                </n-gi>
                <n-gi>
                    <total :name="'Customer'" :url="'http://localhost:8080/api/DashBoard/User/total'" />
                </n-gi>
                <n-gi>
                    <total :name="'Bill today'"
                        :url="`http://localhost:8080/api/DashBoard/Bill/Last7Days?from=${now.toISOString().slice(0,10)}&to=${now.toISOString().slice(0,10)}`" />
                </n-gi>
            </n-grid>
            <n-divider />
            <n-grid x-gap="24" y-gap="24" cols="2">
                <n-gi>
                    <YearChart :seriesName="'Bill'" />
                </n-gi>
                <n-gi>
                    <TimeChart :chartType="'bar'" :field="'User'" :from="'2022-01-01'" :to="'2023-01-01'"
                        :charTitle="'Top 5 customer has the most lease in month'" />
                </n-gi>
                <n-gi>
                    <TimeChart :chartType="'treemap'" :field="'Car'" :from="'2022-01-01'" :to="'2023-01-01'"
                        :charTitle="'Top 5 car has the most leased in month'" />
                </n-gi>
                <n-gi>
                    <tableChart />
                </n-gi>
            </n-grid>
            <n-divider />
        </n-layout-content>
    </n-watermark>
</template>

<script>
import total from '@/components/AdminTotal.vue'
import YearChart from '@/components/YearChart.vue'
import TimeChart from '@/components/TimeChart.vue'
import tableChart from '@/components/TenDaysChart.vue'
export default {
    data() {
        return {
            now: new Date()
        }
    },
    methods: {
        getMonth(n) {
            let m = new Date().getMonth() + n
            return m < 9 ? "0" + m : m
        }
    },
    components: {
        total,
        YearChart,
        TimeChart,
        tableChart
    }
}
</script>

<style scoped>
.content {
    margin-left: 350px;
    margin-right: 100px;
}

.title {
    font-size: 20px;
}
</style>