<template>
    <h1>Lịch sử thuê xe</h1>
    <table v-if="bill">
        <thead>
            <tr>
                <th>Ngày thuê</th>
                <th>Xe thuê</th>
                <th>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="items in bill" :key="items.id">
                <td>
                    <n-time :time="bill.createDate" format="dd-MM-yyyy" />
                </td>
                <td>
                    <CarNameLink :idCar="items.carID" />
                </td>
                <td>
                    <n-button @click="seeDetail(items)" circle color="#8a2be2" size="large">
                        <n-icon>
                            <searchIcon />
                        </n-icon>
                    </n-button>
                </td>
            </tr>
        </tbody>
    </table>
    <h1 class="message" v-else>Bạn không có yêu cầu duyệt hoặc đang không thuê xe nào. Bạn có thể thuê xe tại
        <router-link :to="{ name: 'car' }">Đây</router-link>,
        hoặc bạn có thể xem qua <router-link :to="{ name: 'tutorial' }">hướng dẫn thuê xe</router-link> của chúng tôi.
    </h1>
    <n-modal v-model:show="showModal.status">
        <n-card style="width: 600px" title="Bill detail" :bordered="true" size="huge" role="dialog">
            <template #header-extra>
                <n-button @click="showModal.status = false" strong secondary circle>
                    <template #icon>
                        <n-icon>
                            <CloseIcon />
                        </n-icon>
                    </template>
                </n-button>
            </template>
            <n-collapse accordion>
                <n-collapse-item title="Car" name="2">
                    <carDetail :idCar="showModal.item.carID" />
                </n-collapse-item>
                <n-collapse-item title="Bill Detail" name="3">
                    <n-list>
                        <n-thing><b>Status</b>: {{ showModal.item.status }}</n-thing>
                        <n-thing><b>Create date</b>:
                            <n-time :time="new Date(showModal.item.createDate).getTime()" :to="Date.now()"
                                type="relative" />
                        </n-thing>
                        <n-thing v-if="showModal.item.acceptDate"><b>Accept date</b>:
                            <n-time :time="new Date(showModal.item.acceptDate).getTime()" :to="Date.now()"
                                type="relative" />
                        </n-thing>
                        <n-thing v-if="showModal.item.refuseDate"><b>Refuse date</b>:
                            <n-time :time="new Date(showModal.item.refuseDate).getTime()" :to="Date.now()"
                                type="relative" />
                        </n-thing>
                        <n-thing v-if="showModal.item.transactionDate"><b>Transaction date</b>:
                            <n-time :time="new Date(showModal.item.transactionDate).getTime()" :to="Date.now()"
                                type="relative" />
                        </n-thing>
                        <n-thing v-if="showModal.item.total > 0"><b>Total</b>: {{ showModal.item.total }}<b>$</b>
                        </n-thing>
                    </n-list>
                </n-collapse-item>
            </n-collapse>
            <template #footer>
                <n-space justify="end">
                    <n-button tertiary @click="showModal.status = false">Ok</n-button>
                </n-space>
            </template>
        </n-card>
    </n-modal>
</template>

<script>
import userNav from '@/components/Home/ProfileNav.vue'
import CarNameLink from '@/components/CarNameLink.vue'
import carDetail from '@/components/CarBillDetail.vue'
import {
    Search as searchIcon,
    Close as CloseIcon
} from '@vicons/ionicons5'
import axios from 'axios'
export default {
    data() {
        return {
            bill: [],
            showModal: {
                status: false,
                item: {}
            }
        }
    },
    mounted() {
        this.getBill()
    },
    methods: {
        async getBill() {
            axios.get(`http://localhost:8080/api/Bill/u=${this.$route.meta.userName}`)
                .then(res => {
                    this.bill = res.data.data
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async seeDetail(value) {
            this.showModal.status = true;
            this.showModal.item = value
        },
    },
    components: {
        carDetail,
        CloseIcon,
        CarNameLink,
        searchIcon,
        userNav
    }
}
</script>

<style scoped>
.message {
    font-size: 30px;
}

h1 {
    font-size: 30px;
    padding: 10px;
}

a {
    text-decoration: none;
    color: rgb(55, 84, 86);
}

a:hover {
    color: rgb(0, 126, 130);
}

table {
    border-collapse: collapse;
    height: 10px;
    border: solid 1px;
    width: 80%;
    border-color: rgb(124, 124, 124);
}

td,
th {
    border-bottom: 1px solid;
    border-color: rgb(124, 124, 124);
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