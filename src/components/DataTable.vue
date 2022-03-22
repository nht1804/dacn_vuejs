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
                        First Name: {{item.information.firstName}}
                        <br />First Name: {{item.information.lastName}}
                        <br />Date of birth: {{item.information.dateOfBirth}}
                        <br />Address: {{item.information.address}}
                        <br />Number: {{item.information.number}}
                    </n-thing>
                </td>
                <td>
                    <n-button strong secondary circle type="info">
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
                    <n-button strong secondary circle type="info">
                        <template #icon>
                            <n-icon>
                                <SaveIcon />
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
</template>

<script>
import {
    Build as BuildIcon,
    Trash as TrashIcon,
    Save as SaveIcon
} from '@vicons/ionicons5'
import axios from 'axios'
export default {
    data() {
        return {
            userUrl: 'https://622caa73087e0e041e10d035.mockapi.io/api/USER',
            user: null,
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

    },
    components: {
        BuildIcon,
        TrashIcon,
        SaveIcon
    }
}
</script>

<style>
</style>