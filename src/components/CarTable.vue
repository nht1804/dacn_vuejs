<template>
    <n-table :single-line="false" :bordered="true">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Image</th>
                <th>manufacturer</th>
                <th>status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="car">
            <tr v-for="item in car" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.carType }}</td>
                <td>{{ item.image }}</td>
                <td>{{ item.manufacturer }}</td>
                <td>{{ item.status }}</td>
                <td>
                    <n-button
                        strong
                        secondary
                        circle
                        type="info"
                        @click="showModal.status = true, editCar(item.id)"
                    >
                        <template #icon>
                            <n-icon>
                                <BuildIcon />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="info" @click="deleteUser(item.id)">
                        <template #icon>
                            <n-icon>
                                <TrashIcon />
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
                    <n-empty description="Can't find anything"></n-empty>
                </td>
            </tr>
        </tbody>
    </n-table>
</template>

<script>
import {
    Build as BuildIcon,
    Trash as TrashIcon,
    Save as SaveIcon,
    Close as CloseIcon,
    AddCircle as AddIcon
} from '@vicons/ionicons5'
import axios from 'axios'

export default {
    data() {
        return {
            carUrl: 'https://622caa73087e0e041e10d035.mockapi.io/api/car',
            car: null,
            showModal: {
                addUser: false,
                status: false,
                modal: []
            },
        }
    },
    mounted() {
        this.getCar();
    },
    methods: {
        async getCar(){
            axios.get(this.carUrl)
            .then(res => {
                this.car = JSON.parse(JSON.stringify(res.data))
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    components: {
        BuildIcon,
        TrashIcon,
        SaveIcon,
        CloseIcon,
        AddIcon

    },
}
</script>

<style>
</style>