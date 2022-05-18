<template>
    <n-grid cols="3">
        <n-gi>
            <h1>From to:</h1>
        </n-gi>
        <n-gi span="2">
            <n-date-picker v-model:formatted-value="timeRange" type="daterange" />
        </n-gi>
    </n-grid>
    <apexchart width="500" :type="chartType" :options="chartOptions" :series="series">
    </apexchart>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        from: String,
        to: String,
        charTitle: String,
        field: String,
        chartType: String
    },
    data() {
        return {
            timeRange: [this.from, this.to],
            chartOptions: {
                chart: {
                    id: "char",
                },
                xaxis: {
                    title: {
                        text: this.charTitle
                    },
                    type: 'category'
                },
            },
            series: [
                {
                    name: this.field,
                    data: [
                        { x: '', y: 0 },
                        { x: '', y: 0 },
                        { x: '', y: 0 },
                        { x: '', y: 0 },
                        { x: '', y: 0 }],
                }
            ]
        }
    },
    watch: {
        timeRange: function () {
            this.getData(this.field, 0)
        }
    },
    mounted() {
        this.getData(this.field, 0)
    },
    methods: {
        async getData(field, seriesIndex) {
            this.series[0].data = [
                { x: '', y: 0 },
                { x: '', y: 0 },
                { x: '', y: 0 },
                { x: '', y: 0 },
                { x: '', y: 0 }
            ]
            if (this.timeRange !== null) {
                await axios.get(`http://localhost:8080/api/DashBoard/Bill/${field}?from=${this.timeRange[0]}&to=${this.timeRange[1]}`)
                    .then(res => {
                        if (res.data.data.length > 0) {
                            res.data.data.forEach((x, y) => {
                                this.series[seriesIndex].data[y] = { x: x.id, y: x.count }
                            })
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })
                if (this.field === 'Car') {
                    this.series[seriesIndex].data.forEach(x => {
                        if (x.x !== '') {
                            axios.get(`http://localhost:8080/api/Car/id/${x.x}`)
                                .then(res => {
                                    x.x = res.data.data.name
                                })
                                .catch(err => {
                                    console.error(err);
                                })
                        }
                    })
                }
            }
        },
    }
}
</script>

<style scoped>
h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    font-size: 20px;
}
</style>