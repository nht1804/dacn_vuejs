<template>
    <n-table :single-line="false" :bordered="true">
        <thead>
            <tr>
                <th>UserID</th>
                <th>Password</th>
                <th>Role</th>
                <th>information</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody v-if="user">
            <tr v-for="item in user" :key="item.id">
                <td>{{ item.userID }}</td>
                <td>{{ item.password }}</td>
                <td>{{ item.role.roleName }}</td>
                <td>
                    <n-thing>
                        First Name: {{ item.information.firstName }}
                        <br />
                        First Name: {{ item.information.lastName }}
                        <br />
                        Date of birth: {{ item.information.dateOfBirth }}
                        <br />
                        Gender: {{ item.information.gender }}
                        <br />
                        Address: {{ item.information.address }}
                        <br />
                        Number: {{ item.information.number }}
                    </n-thing>
                </td>
                <td>
                    <n-button
                        strong
                        secondary
                        circle
                        type="info"
                        @click="showModal.status = true, showModal.id = item.id"
                    >
                        <template #icon>
                            <n-icon>
                                <BuildIcon />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button strong secondary circle type="info">
                        <template #icon>
                            <n-icon>
                                <TrashIcon />
                            </n-icon>
                        </template>
                    </n-button>
                </td>
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
        <n-card
            style="width: 600px"
            title="Edit user"
            :bordered="true"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
            <template #header-extra>
                <n-button @click="showModal.status = false" strong secondary circle>
                    <template #icon>
                        <n-icon>
                            <CloseIcon />
                        </n-icon>
                    </template>
                </n-button>
            </template>
            {{edit(showModal.id)}}
            <template #footer>
                <n-button tertiary @click="showModal.status = false, showModal.id = null">Cancel</n-button>
                <n-button tertiary @click="showModal.status = false, showModal.id = null">Save</n-button>
            </template>
        </n-card>
    </n-modal>
</template>

<script>
import {
    Build as BuildIcon,
    Trash as TrashIcon,
    Save as SaveIcon,
    Close as CloseIcon
} from '@vicons/ionicons5'
import axios from 'axios'
export default {
    data() {
        return {
            userUrl: 'https://622caa73087e0e041e10d035.mockapi.io/api/USER',
            user: null,
            showModal: {
                status: false,
                id: null
            }
        }
    },
    mounted() {
        axios.get(this.userUrl)
            .then(res => {
                this.user = res.data
            })
            .catch(err => {
                console.error(err);
            })
    },
    methods: {
        edit(id) {
            var a = null
            this.user.forEach((e) => {
                if (e.id === id)
                    a = e
            });
            return a
        }
    },
    components: {
        BuildIcon,
        TrashIcon,
        SaveIcon,
        CloseIcon
    }
}
</script>

<style>
</style>