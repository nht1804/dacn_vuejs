<template>
  <userNav />
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
  display: flex;
  float: right;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  flex-wrap: wrap;
}
</style>