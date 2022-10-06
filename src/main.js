import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import Maska from "maska";

import "animate.css";

const app = createApp(App);

app.use(createPinia());
app.use(Maska);
app.mount("#app");
