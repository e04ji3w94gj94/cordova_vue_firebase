import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

window.handleOpenURL = function(url) {
  setTimeout(function() {
    if(url.indexOf("second")>-1){
        router.push({ name: "second" });
    }
  }, 0);
};
createApp(App)
  .use(router)
  .mount("#app");
