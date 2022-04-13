<template>
  <n-config-provider :theme="darkTheme">
    <n-layout-sider style="position: fixed; height: 100%;">
      <div class="logoSide">
        <n-icon style="top:5px">
          <LogoVue />
        </n-icon>
        <b>3</b>
      </div>
      <n-menu :options="menuOptions" :default-value="this.$route.meta.page" />
    </n-layout-sider>
  </n-config-provider>
</template>

<script>
import { darkTheme, NIcon, NEllipsis } from 'naive-ui'
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
      darkTheme,
      menuOptions: [{
        label: () => h(RouterLink, {
          to: "/"
        }, { default: () => "Going Home" }),
        key: "go-back-home",
        icon: renderIcon(Home)
      },
      {
        label: () => h(RouterLink, {
          to: {
            name: "dashboard", params: {
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
          label: () => h(RouterLink, {
            to: {
              name: "userTable", params: {
                lang: "en-US"
              }
            }
          }, { default: () => "User" }),
          key: "userTable",
          icon: renderIcon(People)
        },
        {
          label: () => h(RouterLink, {
            to: {
              name: "roleTable", params: {
                lang: "en-US"
              }
            }
          }, { default: () => "Role" }),
          key: "roleTable",
          icon: renderIcon(Diamond)
        },
        {
          label: () => h(RouterLink, {
            to: {
              name: "carTable", params: {
                lang: "en-US"
              }
            }
          }, { default: () => "Car" }),
          key: "carTable",
          icon: renderIcon(Car)
        },
        {
          label: 'Bill',
          key: 'bill-table',
          disabled: true,
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