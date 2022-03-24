<template>
    <n-space vertical>
        <n-layout has-sider>
            <adminNavside/>
            <n-layout>
                <adminHeader />
                <n-divider />
                <n-layout-content>
                    <n-scrollbar>
                        <datatb />
                    </n-scrollbar>
                </n-layout-content>
                <n-divider />
                <n-layout-footer>Footer</n-layout-footer>
            </n-layout>
        </n-layout>
    </n-space>
</template>

<script>
import datatb from '../components/DataTable.vue'
import adminHeader from '../components/AdminHeader.vue'
import adminNavside from '../components/AdminNavSide.vue'
export default {
    data() {
        return {
        }
    },
    components: { datatb, adminHeader, adminNavside }
}
</script>

<style>
</style>