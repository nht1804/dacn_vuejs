<template>
  <div>
    <div class="header-admin">
      <b>Page title</b>
      <div class="user">
        <n-dropdown size="large" :options="options">
          <n-button type="info" round circle dashed>
            <n-icon size="30">
              <PersonCircle />
            </n-icon>
          </n-button>
        </n-dropdown>
      </div>
    </div>
    <n-divider style="box-shadow: 0px 1px 5px;"/>
  </div>
</template>

<script>
import { h } from "vue";
import { NIcon } from "naive-ui";
import {
  PersonCircle,
  PersonCircleOutline,
  LogOutOutline
} from '@vicons/ionicons5'
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
export default {
  data() {
    return {
      containerRef: null,
      options: [
        {
          label: "Profile",
          key: "profile",
          icon: renderIcon(PersonCircleOutline)
        },
        {
          label: "Logout",
          key: "logout",
          icon: renderIcon(LogOutOutline)
        }
      ]
    }
  }, components: { PersonCircle, PersonCircleOutline, LogOutOutline }
}
</script>

<style>
.header-admin {
  padding: 10px;
  margin-bottom: 5px;
  margin-top: 10px;
  margin-left: 300px;
  margin-right: 50px;
}
.header-admin b {
  font-size: 20px;
}
.user{
  float: right;
}
</style>