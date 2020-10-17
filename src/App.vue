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
        <div class="text-h4">Todos</div>
      </div>
      <v-spacer></v-spacer>
      <div v-if="user" class="text=h6">{{ user.username }}</div>
      <amplify-sign-out
        v-if="authState === 'signedin' && user"
      ></amplify-sign-out>
    </v-app-bar>
    <v-main>
      <v-container v-if="authState !== 'signedin'" fluid fill-height>
        <v-row align="center" justify="center">
          <amplify-authenticator></amplify-authenticator>
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
    console.log(this.authState, this.user);
    onAuthUIStateChange((authState, authData) => {
      console.log(authData, authState);
      this.authState = authState;
      this.user = authData;
    });
  },
  beforeDestroy() {
    return onAuthUIStateChange;
  }
});
</script>
