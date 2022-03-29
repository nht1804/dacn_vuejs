<template>
    <n-layout-content class="content">DashBoard</n-layout-content>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
        console.log(this.$route.meta.lmao)
    }
}
</script>

<style>
.content {
    margin-left: 400px;
    margin-right: 100px;
}
</style>