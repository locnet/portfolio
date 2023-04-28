import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createPinia } from "pinia";

loadFonts();

const app = createApp(App).use(createPinia());

app.use(router);
app.use(vuetify);
app.mount("#app");
