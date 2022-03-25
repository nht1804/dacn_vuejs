<template>
  <n-config-provider :theme="darkTheme">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="55"
      style="position:fixed; height: 100%;"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <div class="logoSide">
        <n-icon style="top:5px">
          <LogoVue />
        </n-icon>
        <b v-if="collapsed === false">Logo</b>
      </div>
      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :options="menuOptions"
        :collapsed-icon-size="30"
        @update:value="handleUpdateValue"
      />
    </n-layout-sider>
  </n-config-provider>
</template>

<script>
import { darkTheme, NIcon } from 'naive-ui'
import { RouterLink } from "vue-router"
import { h } from 'vue'
import {
  LogoVue,
  Home,
  BarChart,
  Cube,
  InformationCircle,
  People,
  Car,
  BagCheck,
  Diamond
} from '@vicons/ionicons5'
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
export default {
  data() {
    return {
      collapsed: false,
      darkTheme,
      menuOptions: [{
        label: () => h(RouterLink, {
          to: {
            name: "home", params: {
              lang: "en-US"
            }
          }
        }, { default: () => "Going Home" }),
        key: "go-back-home",
        icon: renderIcon(Home)
      },
      {
        label: () => h(RouterLink, {
          to: {
            name: "home", params: {
              lang: "en-US"
            }
          }
        }, { default: () => "Dashboard" }),
        key: "dashboard",
        icon: renderIcon(BarChart)
      },
      {
        label: "Table",
        key: "table",
        icon: renderIcon(Cube),
        children: [{
          label: 'User',
          key: 'user-table',
          icon: renderIcon(People)
        }, {
          label: 'Role',
          key: 'role-table',
          icon: renderIcon(Diamond)
        },
        {
          label: 'Car',
          key: 'car-table',
          icon: renderIcon(Car)
        },
        {
          label: 'Bill',
          key: 'bill-table',
          icon: renderIcon(BagCheck)
        }
        ]
      },
      {
        label: () => h(RouterLink, {
          to: {
            name: "about", params: {
              lang: "en-US"
            }
          }
        }, { default: () => "About" }),
        key: "about",
        icon: renderIcon(InformationCircle)
      }
      ]
    }
  },
  components: { LogoVue }
}
</script>

<style>
.logoSide {
  margin: 15px;
  text-align: center;
  font-size: 30px;
  color: aquamarine;
}
</style>