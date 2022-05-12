<template>
    <n-list>
        <n-list-item>
            <n-thing><b>User name: </b>{{user.userName}}</n-thing>
        </n-list-item>

        <n-list-item v-if="user.information">
            <n-thing><b>First name: </b>{{user.information.firstName}}</n-thing>
            <n-thing><b>Last name: </b>{{user.information.lastName}}</n-thing>
            <n-thing><b>Date of birth: </b>{{user.information.dateOfBirth}}</n-thing>
            <n-thing><b>Gender: </b>{{user.information.gender}}</n-thing>
            <n-thing><b>Address: </b>{{user.information.address}}</n-thing>
            <n-thing><b>Number: </b>{{user.information.number}}</n-thing>
        </n-list-item>
    </n-list>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        userName: String
    },
    data() {
        return {
            user: {}
        }
    },
    mounted() {
        this.getUserDetail()
    },
    methods: {
        async getUserDetail() {
            axios.get(`http://localhost:8080/api/User/username/${this.userName}`)
                .then(res => {
                    this.user = res.data.data
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }
}
</script>

<style>
</style>