import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.use(router).use(naive).use(VueApexCharts);
app.mount("#app");
