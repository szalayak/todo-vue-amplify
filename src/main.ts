import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import Amplify from "aws-amplify";
import "@aws-amplify/ui-vue";
import awsExports from "./aws-exports";
import i18n from "./i18n";

Amplify.configure(awsExports);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
