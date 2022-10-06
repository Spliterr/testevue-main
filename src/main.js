import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import Maska from "maska";

import "animate.css";

createApp(App).use(createPinia()).use(Maska).mount("#app");
