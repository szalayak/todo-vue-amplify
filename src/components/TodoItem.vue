<template>
  <tr>
    <td>
      <v-checkbox
        v-model="item.done"
        :label="item.text"
        @click="toggleCompleted(item)"
      />
    </td>
    <td>{{ item.deadline }}</td>
    <td>
      <v-btn class="ms-2" @click="editItem(item)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn color="error" class="ms-2" @click="deleteItem(item)">
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
    editItem(item) {
      this.$emit("edited", item);
    },
    deleteItem(item) {
      this.$emit("deleted", item);
    },
    toggleCompleted(item) {
      this.$emit(item.done ? "completed" : "uncompleted", item);
    }
  }
};
</script>
