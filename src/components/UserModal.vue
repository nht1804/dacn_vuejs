<template>
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
                            UserID
                            <n-popover trigger="hover">
                                <template #trigger>
                                    <n-input disabled placeholder="UserID" />
                                </template>
                                <span>You can't edit this</span>
                            </n-popover>
                        </n-gi>
                        <n-gi>
                            Password
                            <n-input maxlength="12" show-count clearable placeholder="Password" />
                        </n-gi>
                        <n-gi>
                            ROLE
                            <n-select v-model:value="value" :options="role.roleName" />
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
                            <n-date-picker type="date" clearable />
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
                <n-button tertiary @click="showModal.status = false">Cancel</n-button>
                <n-button tertiary @click="showModal.status = false, save()">Save</n-button>
            </template>
        </n-card>
    </n-modal>
</template>
<script>
export default {
    props:['showModal']
}
</script>