<template>
    <n-list>
        <n-thing><b>Name: </b>{{ car.name }}</n-thing>
        <n-thing><b>Price: </b>{{ car.price }}</n-thing>
        <n-thing><b>Detail: </b>
            <router-link :to="{ name: 'carDetail', params: { id: idCar } }">See Detail</router-link>
        </n-thing>
    </n-list>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        idCar: String
    },
    data() {
        return {
            car: {}
        }
    },
    mounted() {
        this.getCarDetail()
    },
    methods: {
        async getCarDetail() {
            axios.get(`http://localhost:8080/api/Car/id/${this.idCar}`)
                .then(res => {
                    this.car = res.data.data
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: blueviolet;
}

a:hover {
    color: rgb(59, 0, 114)
}
</style>