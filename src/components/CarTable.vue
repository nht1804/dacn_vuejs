<template>
    <n-table :single-line="true">
        <thead>
            <tr>
                <th colspan="7">
                    <n-space justify="end">
                        <n-button @click="modal(), showModal.status = true, showModal.addCar = true">Add
                            a
                            car</n-button>
                    </n-space>
                </th>
            </tr>
        </thead>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Seat</th>
                <th>Transmission</th>
                <th>Manufacturer</th>
                <th>About</th>
                <th>Driver</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="car">
            <tr v-for="item in car" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <n-scrollbar style="max-height: 100px">
                        <p v-for="(img, index) in item.image" :key="index">
                            <a :href="img">
                                Link {{ index + 1 }}
                            </a>
                        </p>
                    </n-scrollbar>
                </td>
                <td>
                    {{ item.detail.seat }}
                </td>
                <td>
                    {{ item.detail.transmission }}
                </td>
                <td>
                    {{ item.detail.manufacturer }}
                </td>
                <td>{{ item.detail.about }}</td>
                <td>
                    <n-tag v-if="item.detail.hasDriver" type="success">Yes</n-tag>
                    <n-tag v-else type="error">No</n-tag>
                </td>
                <td>
                    <n-tag v-if="item.status == true" type="success">TRUE</n-tag>
                    <n-tag v-else type="error">FALSE</n-tag>
                </td>
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
                    <n-input clearable placeholder="Manufacturer" v-model:value="showModal.modal.detail.manufacturer" />
                </n-gi>
                <n-gi>
                    Seat
                    <n-input-number clearable placeholder="Type" v-model:value="showModal.modal.detail.seat" />
                </n-gi>
                <n-gi>
                    Status
                    <n-select v-model:value="showModal.modal.status" :options="statusOption" />
                </n-gi>
                <n-gi>
                    Price
                    <n-input-number clearable placeholder="Price" v-model:value="showModal.modal.price" />
                </n-gi>
                <n-gi>
                    Transmission
                    <n-input clearable placeholder="Transmission" v-model:value="showModal.modal.detail.transmission" />
                </n-gi>
                <n-gi span="2">
                    About
                    <n-input v-model:value="showModal.modal.detail.about" type="textarea" placeholder="About" />
                </n-gi>
                <n-gi>
                    Driver
                    <n-select v-model:value="showModal.modal.detail.hasDriver" :options="hasDriverOption" />
                </n-gi>
                <n-gi span="3">
                    Image
                    <div class="input" v-for="(img, index) in showModal.modal.image" :key="index">
                        <n-input clearable placeholder="Image" v-model:value="showModal.modal.image[index]" />
                        <n-button :disabled="removeImg" @click="actionImgLink(false)" style="margin-left:10px;" strong
                            secondary circle type="primary">
                            <n-icon>
                                <removeIcon />
                            </n-icon>
                        </n-button>
                        <n-button :disabled="addImg" @click="actionImgLink(true)" style="margin-left:10px;" strong
                            secondary circle type="primary">
                            <n-icon>
                                <MoreIcon />
                            </n-icon>
                        </n-button>
                    </div>
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
    AddCircle as AddIcon,
    Add as MoreIcon,
    Remove as removeIcon
} from '@vicons/ionicons5'
import { NInput } from 'naive-ui'
import axios from 'axios'

export default {
    data() {
        return {
            carUrl: 'http://localhost:8080/api/Car',
            car: null,
            showModal: {
                addCar: false,
                status: false,
                modal: {}
            },
            statusOption: [{
                label: "true",
                value: true
            },
            {
                label: "false",
                value: false
            }],
            hasDriverOption: [{
                label: "Yes",
                value: true
            },
            {
                label: "No",
                value: false
            }],
            addImg: false,
            removeImg: false,
        }
    },
    mounted() {
        this.getCar();
        this.modal();
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
            this.showModal.addCar = false
            this.showModal.modal = {}
            axios.get(this.carUrl + "/id/" + id)
                .then(res => {
                    this.showModal.modal = res.data.data
                    this.showModal.status = true;
                    if (res.data.data.image.length === 1) {
                        this.removeImg = true;
                    } else if (res.data.data.image.length === 5) {
                        this.addImg = true;
                    }
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
        },
        actionImgLink(add) {
            let c = this.showModal.modal.image.length;
            if (add) {
                if (c === 5) {
                    this.addImg = true;
                }
                else {
                    if ((c + 1) === 5) {
                        this.addImg = true;
                    }
                    this.showModal.modal.image.push("");
                    this.removeImg = false;
                }
            } else {
                if (c === 1) {
                    this.removeImg = true;
                }
                else {
                    if ((c - 1) === 1) {
                        this.removeImg = true
                    }
                    this.showModal.modal.image.splice(-1)
                    this.addImg = false
                }
            }
        },
        modal() {
            this.showModal.modal = {
                name: "",
                price: "",
                detail: {
                    seat: 0,
                    transmission: "",
                    manufacturer: "",
                    about: "",
                    hasDriver: false
                },
                image: [
                    "",
                ],
                status: true,
                count: 0
            }
        }
    },
    components: {
        BuildIcon,
        TrashIcon,
        SaveIcon,
        CloseIcon,
        AddIcon,
        MoreIcon,
        NInput,
        removeIcon

    },
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: blueviolet;
}

a:hover {
    color: black;
}

.input {
    display: flex;
    flex-wrap: nowrap;
    width: 90%;
    justify-content: flex-start;
    margin-top: 10px;
}

.add-a-image {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>