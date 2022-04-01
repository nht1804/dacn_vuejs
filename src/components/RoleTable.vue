<template>
    <n-table :single-line="true" :bordered="true">
        <thead>
            <tr>
                <th colspan="3">
                    <n-space justify="end">
                        <n-button
                            @click="showModal.status = true, showModal.modal = {}, showModal.addRole = true"
                        >New role</n-button>
                    </n-space>
                </th>
            </tr>
        </thead>
        <thead>
            <tr>
                <th>Role Name</th>
                <th>Role Level</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="role">
            <tr v-for="item in role" :key="item.id">
                <td>{{ item.roleName }}</td>
                <td>{{ item.roleLevel }}</td>
                <td>
                    <n-button strong secondary circle type="info" @click="editRole(item.id)">
                        <template #icon>
                            <n-icon>
                                <BuildIcon />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="info" @click="deleteRole(item.id)">
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
        <n-card style="width: 600px" title="Edit Role" :bordered="true" size="huge" role="dialog">
            <template #header-extra>
                <n-button @click="showModal.status = false" strong secondary circle>
                    <template #icon>
                        <n-icon>
                            <CloseIcon />
                        </n-icon>
                    </template>
                </n-button>
            </template>
            <n-grid x-gap="12" y-gap="12" :cols="2">
                <n-gi>
                    Role Name
                    <n-input placeholder="Role Name" v-model:value="showModal.modal.roleName" />
                </n-gi>
                <n-gi>
                    Role Level
                    <n-input-number
                        clearable
                        placeholder="Role Level"
                        v-model:value="showModal.modal.roleLevel"
                    />
                </n-gi>
            </n-grid>
            <template #footer>
                <n-space justify="end">
                    <n-button tertiary @click="showModal.status = false">Cancel</n-button>
                    <n-button v-if="showModal.addRole == false" @click="save()" tertiary>Save</n-button>
                    <n-button v-else tertiary @click="addRole()">Add</n-button>
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
            roleUrl: 'http://localhost:8080/api/Role',
            role: null,
            showModal: {
                addRole: false,
                status: false,
                modal: {}
            }
        }
    },
    mounted() {
        this.getRole();
    },
    methods: {
        async getRole() {
            axios.get(this.roleUrl)
                .then(res => {
                    this.role = res.data.data
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async editRole(id) {
            this.showModal.modal = {}
            axios.get(this.roleUrl + "/id/" + id)
                .then(res => {
                    this.showModal.modal = res.data.data
                    this.showModal.addRole = false;
                    this.showModal.status = true;
                    this.getRole();
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async save() {
            axios.put(this.roleUrl, this.showModal.modal)
                .then(res => {
                    this.showModal.status = false;
                    this.getRole();
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async addRole() {
            axios.post(this.roleUrl, this.showModal.modal)
                .then(res => {
                    this.showModal.status = false;
                    this.getRole();
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