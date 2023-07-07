import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel, IonList, IonItem } from "@ionic/vue";

const app = createApp(App).use(IonicVue).use(router);

router.isReady().then(() => {
  app.component("IonContent", IonContent);
  app.component("IonHeader", IonHeader);
  app.component("IonPage", IonPage);
  app.component("IonTitle", IonTitle);
  app.component("IonToolbar", IonToolbar);
  app.component("IonButton", IonButton);
  app.component("IonLabel", IonLabel);
  app.component("IonList", IonList);
  app.component("IonItem", IonItem);
  app.mount("#app");
});
