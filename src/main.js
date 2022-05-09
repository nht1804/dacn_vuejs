import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";
import store from "@/store/index.js"

const app = createApp(App);

app.use(router).use(naive).use(store);
app.mount("#app");
