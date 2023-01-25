import { createApp } from "vue";
import { createPinia } from "pinia";
import store from "./store";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.use(store).use(router).use(PrimeVue);
app.use(createPinia());
app.use(router);

app.mount("#app");
