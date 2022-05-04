<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {
    }
  }
})
</script>

<template>
  <n-dialog-provider>
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </n-dialog-provider>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
}
</style>