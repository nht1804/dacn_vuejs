<template>
    <n-table :single-line="false" :bordered="true">
        <thead>
            <tr>
                <th colspan="5">
                    <n-space justify="end">
                        <n-button
                            @click="showModal.addUser = true, showModal.modal = {}"
                        >Create User</n-button>
                    </n-space>
                </th>
            </tr>
        </thead>
        <thead>
            <tr>
                <th>UserName</th>
                <th>Password</th>
                <th>Role</th>
                <th>information</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="user">
            <tr v-for="item in user" :key="item.id">
                <td>{{ item.userName }}</td>
                <td>{{ item.password }}</td>
                <td>{{ item.role.roleName }}</td>
                <td>
                    <n-thing>
                        <b>First Name:</b>
                        {{ item.information.firstName }}
                        <n-divider vertical />
                        <b>Last Name:</b>
                        {{ item.information.lastName }}
                        <n-divider vertical />
                        <b>Gender:</b>
                        {{ item.information.gender }}
                        <br />
                        <b>Date of birth:</b>
                        {{ item.information.dateOfBirth }}
                        <n-divider vertical />
                        <b>Number:</b>
                        {{ item.information.number }}
                        <br />
                        <b>Address:</b>
                        {{ item.information.address }}
                    </n-thing>
                </td>
                <td>
                    <n-button strong secondary circle type="info" @click="editUser(item.id)">
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
                    <n-empty description="You can't find anything"></n-empty>
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
            <n-collapse>
                <n-collapse-item title="Account" name="account">
                    <n-grid x-gap="12" :cols="3">
                        <n-gi>
                            UserName
                            <n-popover trigger="hover">
                                <template #trigger>
                                    <n-input
                                        disabled
                                        placeholder="UserName"
                                        v-model:value="showModal.modal.userName"
                                    />
                                </template>
                                <span>You can't edit this</span>
                            </n-popover>
                        </n-gi>
                        <n-gi>
                            Password
                            <n-input
                                maxlength="12"
                                show-count
                                clearable
                                placeholder="Password"
                                v-model:value="showModal.modal.password"
                            />
                        </n-gi>
                        <n-gi>
                            ROLE
                            <n-select
                                @update:value="handleUpdateRoleValue"
                                :value="showModal.modal.role.roleName"
                                :options="roleOption"
                            />
                        </n-gi>
                    </n-grid>
                </n-collapse-item>
                <n-collapse-item title="Information" name="information">
                    <n-grid x-gap="12" :cols="3">
                        <n-gi>
                            First Name
                            <n-input
                                maxlength="12"
                                show-count
                                clearable
                                placeholder="First Name"
                                v-model:value="showModal.modal.information.firstName"
                            />
                        </n-gi>
                        <n-gi>
                            Last Name
                            <n-input
                                maxlength="12"
                                show-count
                                clearable
                                placeholder="Last Name"
                                v-model:value="showModal.modal.information.lastName"
                            />
                        </n-gi>
                        <n-gi>
                            Gender
                            <n-select
                                v-model:value="showModal.modal.information.gender"
                                :options="gender"
                            />
                        </n-gi>
                    </n-grid>
                    <br />
                    <n-grid x-gap="12" :cols="2">
                        <n-gi>
                            Date of birth
                            <n-date-picker
                                type="date"
                                clearable
                                v-model:value="showModal.modal.information.dateOfBirth"
                            />
                        </n-gi>
                        <n-gi>
                            Phone number
                            <n-input
                                maxlength="12"
                                show-count
                                clearable
                                placeholder="Number"
                                v-model:value="showModal.modal.information.number"
                            />
                        </n-gi>
                    </n-grid>
                    <br />Address
                    <n-input
                        type="textarea"
                        clearable
                        placeholder="Address"
                        v-model:value="showModal.modal.information.address"
                    />
                </n-collapse-item>
            </n-collapse>
            <template #footer>
                <n-space justify="end">
                    <n-button tertiary @click="showModal.status = false">Cancel</n-button>
                    <n-button tertiary @click="save()">Save</n-button>
                </n-space>
            </template>
        </n-card>
    </n-modal>
    <n-modal v-model:show="showModal.addUser">
        <n-card style="width: 600px" title="Add user" :bordered="true" size="huge" role="dialog">
            <template #header-extra>
                <n-button @click="showModal.addUser = false" strong secondary circle>
                    <template #icon>
                        <n-icon>
                            <CloseIcon />
                        </n-icon>
                    </template>
                </n-button>
            </template>
            <n-grid x-gap="12" :cols="2">
                <n-gi>
                    UserName
                    <n-input placeholder="UserName" v-model:value="showModal.modal.userName" />
                </n-gi>
                <n-gi>
                    Password
                    <n-input
                        maxlength="12"
                        show-count
                        clearable
                        placeholder="Password"
                        v-model:value="showModal.modal.password"
                    />
                </n-gi>
            </n-grid>
            <template #footer>
                <n-space justify="end">
                    <n-button tertiary @click="showModal.addUser = false">Cancel</n-button>
                    <n-button tertiary @click="addUser">Add user</n-button>
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
            userUrl: 'http://localhost:8080/api/User',
            roleUrl: 'http://localhost:8080/api/Role',
            user: null,
            role: [],
            roleOption: [],
            showModal: {
                addUser: false,
                status: false,
                modal: {}
            },
            gender: [{
                label: "MALE",
                value: "MALE"
            },
            {
                label: "FEMALE",
                value: "FEMALE"
            },
            {
                label: "NONE",
                value: "NONE"
            }]
        }
    },
    mounted() {
        this.getUserData()
        this.getRoleData()
    },
    methods: {
        timeStamp(value) {
            return new Date(value.slice(0, 10)).getTime()
        },
        async editUser(id) {
            this.showModal.modal = {};
            axios.get(this.userUrl + "/id/" + id)
                .then(res => {
                    let d = res.data.data
                    this.showModal.modal = d
                    //yyy-mm-dd to timeStamp
                    this.showModal.modal.information.dateOfBirth = this.timeStamp(d.information.dateOfBirth)
                    this.showModal.status = true
                })
                .catch(err => {
                    console.error(err);
                })
        }, async getUserData() {
            this.user = null
            axios.get(this.userUrl)
                .then(res => {
                    this.user = JSON.parse(JSON.stringify(res.data.data))
                })
                .catch(err => {
                    console.error(err);
                });
        },
        async getRoleData() {
            axios.get(this.roleUrl)
                .then(res => {
                    this.role = JSON.parse(JSON.stringify(res.data.data))
                    res.data.data.forEach(e => {
                        this.roleOption.push({ label: e.roleName, value: e.id })
                    })
                })
                .catch(err => {
                    console.error(err);
                });
        }
        ,
        async save() {
            this.user.forEach(e => {
                if (e.id === this.showModal.modal.id) {
                    e = JSON.parse(JSON.stringify(this.showModal.modal))
                    e.information.dateOfBirth = JSON.parse(JSON.stringify(new Date(e.information.dateOfBirth).toLocaleDateString("sv-SE")))
                    axios.put(this.userUrl, e)
                        .then(res => {
                            this.getUserData()
                            this.showModal.status = false
                        })
                        .catch(err => {
                            console.error(err);
                        })
                    return
                }
            });
        },
        async deleteUser(userID) {
            axios.delete(this.userUrl, {
                data: {
                    id: userID
                }
            })
                .then(res => {
                    this.getUserData()
                })
                .catch(err => {
                    console.error(err);
                })
        },
        async addUser() {
            axios.post(this.userUrl, this.showModal.modal)
                .then(res => {
                    this.showModal.addUser = false
                    this.getUserData()
                    console.log(res)
                })
                .catch(err => {
                    console.error(err);
                })
        },
        handleUpdateRoleValue(value) {
            this.role.forEach(e => {
                if (e.id === value) {
                    this.showModal.modal.role = e
                    return
                }
            })
        },
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