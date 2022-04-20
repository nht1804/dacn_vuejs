<template>
    <h1>Lịch sử thuê xe</h1>
    <table>
        <thead>
            <tr>
                <th>Ngày thuê</th>
                <th>Xe thuê</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="n in 10" :key="n">
                <td>18/04/2000</td>
                <td><RouterLink :to="{ name: 'index' }">Tên Xe</RouterLink></td>
                <td>
                    <n-button circle ghost color="#8a2be2" size="large">
                        <n-icon>
                            <enterLogo />
                        </n-icon>
                    </n-button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import userNav from '@/components/Home/ProfileNav.vue'
import {
    Enter as enterLogo
} from '@vicons/ionicons5'
export default {
    components: {
        userNav,
        enterLogo
    }
}
</script>

<style scoped>
h1 {
    font-size: 30px;
    padding: 10px;
}
a{
    text-decoration: none;
    color: cadetblue;
}
a:hover{
    color:rgb(0, 126, 130);
}
table {
    border-collapse: collapse;
    height: 10px;
    border: solid 1px;
    border-color: rgb(124, 124, 124);
}

td,
th {
    border-bottom: 1px solid;
    border-color: rgb(124, 124, 124);
    width: 40%;
}

td,
th {
    padding: 10px;
    font-size: 20px;
}

th {
    background-color: black;
    color: #f2f2f2;
    text-align: left;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #ddd;
}
</style>