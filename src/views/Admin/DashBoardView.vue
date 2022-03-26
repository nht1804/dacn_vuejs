<template>
    <n-layout has-sider>
        <adminNavside />
        <n-layout>
            <n-layout-header>
                <adminHeader />
            </n-layout-header>
            <n-layout-content class="content">
                DashBoard
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>

<script>
import datatb from '@/components/DataTable.vue'
import adminHeader from '@/components/AdminHeader.vue'
import adminNavside from '@/components/AdminNavSide.vue'
export default {
    data() {
        return {
        }
    },
    components: { datatb, adminHeader, adminNavside }
}
</script>

<style>
.content {
    margin-left: 400px;
    margin-right: 100px;
}
</style>