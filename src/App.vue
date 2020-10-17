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
    </v-app-bar>

    <v-main>
      <Todo />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Todo from "./components/Todo.vue";

export default Vue.extend({
  name: "App",

  components: {
    // HelloWorld,
    Todo
  },

  data: () => ({
    //
  })
});
</script>
