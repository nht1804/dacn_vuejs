<template>
    <n-table :single-line="true">
        <thead>
            <tr>
                <th colspan="7">
                    <n-space justify="end">
                        <n-button
                            @click="showModal.status = true, showModal.modal = {}, showModal.addCar = true"
                        >Add a car</n-button>
                    </n-space>
                </th>
            </tr>
        </thead>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Image</th>
                <th>Manufacturer</th>
                <th>Status</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="car">
            <tr v-for="item in car" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.carType }}</td>
                <td>
                    <n-ellipsis style="max-width: 240px">{{ item.image }}</n-ellipsis>
                </td>
                <td>{{ item.manufacturer }}</td>
                <td>
                    <n-tag v-if="item.status == true" type="success">TRUE</n-tag>
                    <n-tag v-else type="error">FALSE</n-tag>
                </td>
                <td>{{ item.price }}</td>
                <td>
                    <n-button strong secondary circle type="info" @click="editCar(item.id)">
                        <template #icon>
                            <n-icon>
                                <BuildIcon />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="info" @click="deleteCar(item.id)">
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
    <n-modal v-model:show="showModal.status">
        <n-card style="width: 600px" title="Edit user" :bordered="true" size="huge" role="dialog">
            <template #header-extra>
                <n-button @click="showModal.status = false" strong secondary circle>
                    <template #icon>
                        <n-icon>
                            <CloseIcon />
                        </n-icon>
                    </template>
                </n-button>
            </template>
            <n-grid x-gap="12" y-gap="12" :cols="3">
                <n-gi>
                    Name
                    <n-input placeholder="Name" v-model:value="showModal.modal.name" />
                </n-gi>
                <n-gi>
                    Manufacturer
                    <n-input
                        clearable
                        placeholder="Manufacturer"
                        v-model:value="showModal.modal.manufacturer"
                    />
                </n-gi>
                <n-gi>
                    Type
                    <n-input clearable placeholder="Type" v-model:value="showModal.modal.carType" />
                </n-gi>
                <n-gi>
                    Status
                    <n-select v-model:value="showModal.modal.status" :options="statusOption" />
                </n-gi>
                <n-gi span="2">
                    Image
                    <n-input clearable placeholder="Image" v-model:value="showModal.modal.image" />
                </n-gi>
                <n-gi>
                    Price
                    <n-input clearable placeholder="Price" v-model:value="showModal.modal.price" />
                </n-gi>
            </n-grid>
            <template #footer>
                <n-space justify="end">
                    <n-button tertiary @click="showModal.status = false">Cancel</n-button>
                    <n-button v-if="showModal.addCar == false" @click="save()" tertiary>Save</n-button>
                    <n-button v-else tertiary @click="addCar()">Add</n-button>
                </n-space>
            </template>
        </n-card>
    </n-modal>
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
            carUrl: 'http://localhost:8080/api/Car',
            car: null,
            showModal: {
                addCar: false,
                status: false,
                modal: [],
            },
            statusOption: [{
                label: "true",
                value: "true"
            },
            {
                label: "false",
                value: "false"
            }]
        }
    },
    mounted() {
        this.getCar();
    },
    methods: {
        async getCar() {
            axios.get(this.carUrl)
                .then(res => {
                    this.car = res.data.data
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async editCar(id) {
            this.showModal.addCar = false;
            this.showModal.modal = {}
            axios.get(this.carUrl + "/id/" + id)
                .then(res => {
                    this.showModal.modal = res.data.data
                    this.showModal.status = true;
                    this.getCar();
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async addCar() {
            axios.post(this.carUrl, this.showModal.modal)
                .then(res => {
                    this.showModal.status = false;
                    this.getCar();
                    this.showModal.addCar = false;
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async save() {
            axios.put(this.carUrl, this.showModal.modal)
                .then(res => {
                    this.showModal.status = false;
                    this.getCar();
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async deleteCar(carID) {
            axios.delete(this.carUrl, {
                data: {
                    id: carID
                }
            })
                .then(res => {
                    this.getCar();
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