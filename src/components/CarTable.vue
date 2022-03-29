<template>
    <n-table :single-line="false" :bordered="true">
        <thead>
            <tr>
                <th colspan="6">
                    <n-space justify="end">
                        <n-button>Add a car</n-button>
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
                    <n-button strong secondary circle type="info" @click="showModal.status = true">
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
                    <n-input placeholder="Name" />
                </n-gi>
                <n-gi>
                    Manufacturer
                    <n-input clearable placeholder="Manufacturer" />
                </n-gi>
                <n-gi>
                    Type
                    <n-input clearable placeholder="Type" />
                </n-gi>
                <n-gi>
                    Status
                    <n-select />
                </n-gi>
                <n-gi>
                    Image
                    <n-input clearable placeholder="Image" />
                </n-gi>
                <n-gi>
                    <n-space justify="center">
                        <n-image width="150" src="http://placeimg.com/640/480/cats" />
                    </n-space>
                </n-gi>
            </n-grid>
            <template #footer>
                <n-button tertiary @click="showModal.status = false">Cancel</n-button>
                <n-button tertiary>Save</n-button>
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
        async getCar() {
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