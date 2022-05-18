<template>
    <apexchart width="500" type="area" :options="chartOptions" :series="series">
    </apexchart>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            total: 0,
            now: new Date(),
            last7Day: new Date(),
            timeRange: [this.from, this.to],
            chartOptions: {
                chart: {
                    id: "char",
                },
                xaxis: {
                    title: {
                        text: "Last 7 days"
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
                        { x: '', y: 0 },
                        { x: '', y: 0 },
                        { x: '', y: 0 }],
                }
            ]
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            this.last7Day.setDate(this.now.getDate() - 7)
            axios.get(`http://localhost:8080/api/DashBoard/Bill/Last7Days?from=${this.last7Day.toISOString().slice(0, 10)}&to=${this.now.toISOString().slice(0, 10)}`)
                .then(res => {
                    res.data.data.forEach(x => {
                        this.total += x.total
                    })
                    this.series[0].data.forEach(x => {
                        this.last7Day.setDate(this.last7Day.getDate() + 1)
                        x.x = this.last7Day.toISOString().slice(0, 10)
                        res.data.data.forEach(z => {
                            if (x.x === z.id) {
                                x.y = z.count
                            }
                        })
                    })
                })
                .catch(err => {
                    console.error(err);
                })
        },
    }
}
</script>

<style>
</style>