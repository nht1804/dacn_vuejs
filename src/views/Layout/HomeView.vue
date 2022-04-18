<script>
import HomeHeader from '@/components/Home/Header.vue'
import HomeFooter from '@/components/Home/Footer.vue'
export default {
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>

<template>
  <HomeHeader></HomeHeader>

  <div class="container">
    <RouterView />
  </div>
  <HomeFooter></HomeFooter>
</template>
<style>
.container {
  min-height: 50vh;
}
</style>
