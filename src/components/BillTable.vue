<template>
    <n-table>
        <thead>
            <tr>
                <th>UserName</th>
                <th>Car</th>
                <th>Status</th>
                <th>Create Date</th>
                <th v-if="status === 'PROCESSING'">Accept Date</th>
                <th v-if="status === 'CANCELED'">Canceled Date</th>
                <th v-if="status === 'PAID'">Transaction Date</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="Bills">
            <tr v-for="items in Bills" :key="items.id">
                <td>{{ items.customerID }}</td>
                <td>
                    <LinkCarName :idCar='items.carID' />
                </td>
                <td>
                    <n-tag type="warning" v-if="items.status === 'WAITING'">WAITING</n-tag>
                    <n-tag type="info" v-if="items.status === 'PROCESSING'">PROCESSING</n-tag>
                    <n-tag type="error" v-if="items.status === 'CANCELED'">CANCELED</n-tag>
                    <n-tag type="success" v-if="items.status === 'PAID'">PAID</n-tag>
                </td>
                <td>
                    <n-time :time="new Date(items.createDate).getTime()" :to="Date.now()" type="relative" />
                </td>
                <td v-if="status === 'PROCESSING'">
                    <n-time :time="new Date(items.acceptDate).getTime()" :to="Date.now()" type="relative" />
                </td>
                <td v-if="status === 'CANCELED'">
                    <n-time :time="new Date(items.refuseDate).getTime()" :to="Date.now()" type="relative" />
                </td>
                <td v-if="status === 'PAID'">
                    <n-time :time="new Date(items.transactionDate).getTime()" :to="Date.now()" type="relative" />
                </td>
                <td>
                    <n-button @click="seeDetail(items)" strong secondary circle type="info">
                        <template #icon>
                            <n-icon>
                                <searchIcon />
                            </n-icon>
                        </template>
                    </n-button>

                    <n-button @click="paid(items)" v-if="status === 'PROCESSING'" strong secondary circle type="info">
                        <template #icon>
                            <n-icon>
                                <BagCheckIcon />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button v-if="status === 'WAITING'" @click="accept(items)" strong secondary circle type="primary">
                        <template #icon>
                            <n-icon>
                                <CheckIcon />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button v-if="status === 'WAITING' || status === 'PROCESSING'" @click="cancel(items)" strong
                        secondary circle type="error">
                        <template #icon>
                            <n-icon>
                                <CloseIcon />
                            </n-icon>
                        </template>
                    </n-button>
                </td>
            </tr>
            <tr>
                <th colspan="5">
                    <n-space justify="end">Page</n-space>
                </th>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="5">
                    <n-empty description="You can't find anything"></n-empty>
                </td>
            </tr>
        </tbody>
    </n-table>

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
                <n-collapse-item title="Customer" name="1">
                    <userDetail :userName="showModal.item.customerID" />
                </n-collapse-item>
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
import {
    Close as CloseIcon,
    Search as searchIcon,
    Checkmark as CheckIcon,
    BagCheck as BagCheckIcon
} from '@vicons/ionicons5'
import LinkCarName from './CarNameLink.vue'
import carDetail from './CarBillDetail.vue'
import userDetail from './UserBillDetail.vue'
import axios from "axios"
import { useMessage } from "naive-ui"
export default {
    props: {
        status: String,
        url: String
    },
    data() {
        return {
            Bills: null,
            message: useMessage(),
            showModal: {
                status: false,
                item: {}
            }
        }
    },
    mounted() {
        this.getBill();
    },
    methods: {
        async getBill() {
            this.Bills = await axios.get(this.url + this.status)
                .then(res => {
                    if (res.data.data.length > 0) {
                        return res.data.data
                    }
                })
                .catch(err => {
                    this.message.error(err);
                })
        },
        async accept(value) {
            value.acceptDate = new Date(Date.now()).toISOString()
            value.status = "PROCESSING"
            axios.put(`http://localhost:8080/api/Bill`, value)
                .then(res => {
                    this.message.info(res.data.message)
                })
                .catch(err => {
                    this.message.error(err);
                })
        },
        async cancel(value) {
            value.refuseDate = new Date(Date.now()).toISOString()
            value.status = "CANCELED"
            axios.put(`http://localhost:8080/api/Bill`, value)
                .then(res => {
                    this.message.info(res.data.message);
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async seeDetail(value) {
            this.showModal.status = true;
            this.showModal.item = value
        },
        async paid(value) {
            let time = Math.floor(((Date.now() - new Date(value.acceptDate).getTime()) / (60 * 60 * 1000)))
            axios.get(`http://localhost:8080/api/Car/id/${value.carID}`)
                .then(res => {
                    value.transactionDate = new Date(Date.now()).toISOString()
                    value.status = "PAID"
                    value.total = time * res.data.data.price;
                    axios.put(`http://localhost:8080/api/Bill`, value)
                        .then(res => {
                            this.message.info(res.data.message);
                        })
                        .catch(err => {
                            console.error(err);
                        })
                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    components: {
        CloseIcon,
        searchIcon,
        CheckIcon,
        LinkCarName,
        BagCheckIcon,
        carDetail,
        userDetail
    },
}
</script>

<style>
</style>