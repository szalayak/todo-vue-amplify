<template>
  <tr>
    <td>{{ item.text }}</td>
    <td>{{ item.deadline }}</td>
    <td>
      <v-btn class="ms-2" @click="click">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn color="error" class="ms-2">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  name: "todo-item",
  props: ["item"],
  methods: {
    click: () => {
      alert("clicked");
    }
  }
};
</script>
