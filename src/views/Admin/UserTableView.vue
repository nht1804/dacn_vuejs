<template>
    <n-layout-content class="content">
        <datatb />
    </n-layout-content>
</template>

<script>
import datatb from '@/components/UserTable.vue'
export default {
    data() {
        return {
        }
    },
    components: { datatb }
}
</script>

<style>
.content {
    margin-left: 400px;
    margin-right: 100px;
}
</style>