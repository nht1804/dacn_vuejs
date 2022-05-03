<template>
  <div class="container">
    <div class="error_title">
      404
    </div>
    <div class="message">
      <label>Sorry, we couldn't find this page. But don't worry, 
        you can't find plenty of other things on your <RouterLink :to="{ name: 'index' }">homepage</RouterLink>.
      </label>
    </div>
    <div class="error_img">
      <img src="@/assets/404.png" alt="404">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
}

.error_title {
  text-align: center;
  font-size: 20vh;
  font-family: 'Courier New', Courier, monospace;
}

.message {
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 50%;
  text-align: center;
}

.error_img>img {
  width: 150px;
}
a{
  text-decoration: none;
  color: rgb(6, 3, 196);
}
a:hover{
  color: rgb(2, 0, 147);
}
</style>