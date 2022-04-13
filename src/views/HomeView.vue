<script>
import HomeHeader from '../components/Header.vue'
import HomeFooter from '../components/Footer.vue'
export default {
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<template>
    <HomeHeader></HomeHeader>
    <RouterView />
    <HomeFooter></HomeFooter>
</template>
<style>
</style>
