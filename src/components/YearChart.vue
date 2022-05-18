<template>
    <n-grid cols="3">
        <n-gi>
            <h1>Pick a year:</h1>
        </n-gi>
        <n-gi>
            <n-date-picker v-model:formatted-value="year" value-format="yyyy-MM-dd" type="year" />
        </n-gi>
    </n-grid>
    <apexchart width="500" type="line" :options="chartOptions" :series="series">
    </apexchart>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        seriesName: String,
    },
    data() {
        return {
            year: new Date().getFullYear() + '-01-01',
            chartOptions: {
                chart: {
                    id: "vuechart-example",
                },
                xaxis: {
                    title: {
                        text: 'Total in year'
                    },
                    type: 'category'
                },
            },
            series: [
                {
                    name: this.seriesName,
                    data: [
                        { x: 'Jan', y: 0 },
                        { x: 'Feb', y: 0 },
                        { x: 'Mar', y: 0 },
                        { x: 'Apr', y: 0 },
                        { x: 'May', y: 0 },
                        { x: 'Jun', y: 0 },
                        { x: 'Jul', y: 0 },
                        { x: 'Aug', y: 0 },
                        { x: 'Sep', y: 0 },
                        { x: 'Oct', y: 0 },
                        { x: 'Nov', y: 0 },
                        { x: 'Dec', y: 0 }
                    ],
                }
            ],
        }
    },
    watch: {
        year: function () {
            this.getData();
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            if (this.year !== null) {
                axios.get(`http://localhost:8080/api/DashBoard/Bill?year=${this.year.slice(0, 4)}`)
                    .then(res => {
                        if (res.data.data.length > 0) {
                            res.data.data.forEach((e, i) => {
                                this.series[0].data[e.id - 1].y = e.count
                            });
                        }
                        else {
                            this.series[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    })
            }
        }
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