import Vue from "vue";
import Vuetify from "vuetify";
import VueI18n from "vue-i18n";
import en from "vuetify/src/locale/en";
import hu from "vuetify/src/locale/hu";

import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  en: { $vuetify: en },
  hu: { $vuetify: hu }
};

const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params) as string,
    locales: { en, hu },
    current: "en"
  }
});
