<template>
  <tr>
    <todo-dialog
      :open="dialog"
      :item="item"
      title="Edit Item"
      @closed="onEditingCancelled"
    />
    <td>
      <v-checkbox
        v-model="item.done"
        :label="item.text"
        @click="toggle(item)"
      />
    </td>
    <td>{{ item.deadline }}</td>
    <td>
      <v-icon small @click="editItem(item)" class="mr-2">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)" class="mr-2">mdi-delete</v-icon>
    </td>
  </tr>
</template>

<script>
import TodoDialog from "./TodoDialog";
export default {
  name: "todo-item",
  props: ["item"],
  components: {
    "todo-dialog": TodoDialog,
  },
  data: () => {
    return {
      dialog: false,
    };
  },
  methods: {
    editItem() {
      this.dialog = true;
    },
    deleteItem(item) {
      this.$emit("deleted", item);
    },
    toggle(item) {
      this.$emit(item.done ? "completed" : "uncompleted", item);
    },
    onEditingCancelled() {
      this.dialog = false;
    },
  },
};
</script>
