<template>
  <v-app>
    <v-app-bar app color="white" light>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <div class="text-h4">{{ $t("todos") }}</div>
      </div>
      <v-spacer></v-spacer>
      <v-menu v-if="user">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            {{ user.username }}
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="signOut">
            <v-list-item-title>{{ $t("signOut") }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="changeLanguage('en')">
            <v-list-item-title>{{ $t("en") }}</v-list-item-title>
          </v-list-item>
          <v-list-item @click="changeLanguage('hu')">
            <v-list-item-title>{{ $t("hu") }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container v-if="authState !== 'signedin'" fluid fill-height>
        <v-row align="center" justify="center">
          <amplify-authenticator
            ><amplify-sign-in slot="sign-in" hide-sign-up
          /></amplify-authenticator>
        </v-row>
      </v-container>
      <Todo v-if="authState === 'signedin' && user" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "./components/Todo.vue";
import { onAuthUIStateChange, AuthState } from "@aws-amplify/ui-components";
import { Auth } from "aws-amplify";

type AppData = {
  user: object | undefined;
  authState: AuthState | undefined;
};

export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    Todo
  },
  data() {
    const appData: AppData = {
      user: undefined,
      authState: undefined
    };
    console.log(appData);
    return appData;
  },
  created() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    });
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  },
  methods: {
    signOut() {
      Auth.signOut();
    },
    changeLanguage(locale: string) {
      this.$i18n.locale = locale;
    }
  }
});
</script>
