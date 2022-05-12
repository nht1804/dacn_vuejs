<template>
    <router-link target='_blank' :to="{ name: 'carDetail', params: { id: idCar } }">{{ name }}</router-link>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            name: null
        }
    },
    props: {
        idCar: String
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            axios.get(`http://localhost:8080/api/Car/id/${this.idCar}`).then(res => {
                this.name = res.data.data.name
            }).catch(err => console.log(err))
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