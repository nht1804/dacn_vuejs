<script>
import { RouterLink, RouterView } from 'vue-router'
import { defineComponent } from 'vue'
import { darkTheme } from 'naive-ui'
export default defineComponent({
  setup() {
    return {
      darkTheme
    }
  }
})
</script>

<template>
  <n-config-provider>
    <RouterView />
  </n-config-provider>
</template>
