import Vue from "vue";
import App from "./app.vue";
import { createRouter } from "./router";

export function createApp() {
  const router = createRouter();

  const app = new Vue({
    el: "app",
    router,
    render: (h) => h(App),
    components: { app },
  });

  return { app };
}

window.onload = () => createApp();
