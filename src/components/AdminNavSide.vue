<template>
  <n-layout-sider content-style="padding: 30px;position:fixed">
    <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
  </n-layout-sider>
</template>

<script>
import { RouterLink } from "vue-router"
import { h } from 'vue'
export default {
  data() {
    return {
      menuOptions: [{
        label: () => h(RouterLink, {
          to: {
            name: "home", params: {
              lang: "en-US"
            }
          }
        }, { default: () => "Going Home" }),
        key: "go-back-home",
      },
      {
        label: () => h(RouterLink, {
          to: {
            name: "home", params: {
              lang: "en-US"
            }
          }
        }, { default: () => "Dashboard" }),
        key: "dashboard"
      },
      {
        label: "Table",
        key: "table",
        children: [{
          label: 'User',
          key: 'user-table'
        }, {
          label: 'Role',
          key: 'role-table'
        },
        {
          label: 'Car',
          key: 'car-table'
        },
        {
          label: 'Bill',
          key: 'bill-table'
        }
        ]
      },
      {
        label: () => h(RouterLink, {
          to: {
            name: "home", params: {
              lang: "en-US"
            }
          }
        }, { default: () => "Login" }),
        key: "Login"
      },
      {
        label: () => h(RouterLink, {
          to: {
            name: "about", params: {
              lang: "en-US"
            }
          }
        }, { default: () => "About" }),
        key: "about"
      }
      ]
    }
  },
  components: {}
}
</script>

<style>
</style>