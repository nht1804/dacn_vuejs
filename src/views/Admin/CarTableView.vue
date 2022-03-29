<template>
    <n-layout-content class="content">
        <datatb />
    </n-layout-content>
</template>

<script>
import datatb from '@/components/CarTable.vue'
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