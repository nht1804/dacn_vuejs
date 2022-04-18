<template>
  <userNav/>
  <div class="container">
    <RouterView />
  </div>
</template>

<script>
import userNav from '@/components/Home/ProfileNav.vue'
export default {
  components: {
    userNav
  }
}
</script>

<style scoped>
.container {
  width: 75%;
  margin-top: 50px;
  justify-content: center;
  display: flex;
  float: right;
}
</style>