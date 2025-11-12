import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./settings/lang";
import router from "./router";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(i18n).use(pinia).use(router).mount("#app");
