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
      <v-menu v-if="user">
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on">
            {{ user.username }}
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="signOut">
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- <div v-if="user" class="text=h6">{{ user.username }}</div>
      <amplify-sign-out
        v-if="authState === 'signedin' && user"
      ></amplify-sign-out> -->
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
    console.log(this.authState, this.user);
    onAuthUIStateChange((authState, authData) => {
      console.log(authData, authState);
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
    }
  }
});
</script>
