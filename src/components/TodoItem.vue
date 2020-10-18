<template>
  <tr>
    <todo-dialog
      :open="dialog"
      :item="item"
      title="Edit Item"
      @closed="onEditingCancelled"
      @saved="onItemChanged"
    />
    <td>
      <v-checkbox
        v-model="item.done"
        :label="item.text"
        @click="toggle(item)"
      />
    </td>
    <td>{{ formattedDeadline }}</td>
    <td>
      <v-icon small @click="editItem(item)" class="mr-2">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)" class="mr-2">mdi-delete</v-icon>
    </td>
  </tr>
</template>

<script>
import TodoDialog from "./TodoDialog";
import { DATE_FORMAT, DATE_ISO_FORMAT } from "../data";
import moment from "moment";
export default {
  name: "todo-item",
  props: ["item"],
  components: {
    "todo-dialog": TodoDialog
  },
  data: () => {
    return {
      dialog: false
    };
  },
  computed: {
    formattedDeadline() {
      return moment(this.item.deadline).format(DATE_FORMAT);
    }
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
    onItemChanged(changedAttributes) {
      this.dialog = false;
      const attributes = { ...changedAttributes };
      if (attributes.deadline) {
        attributes.deadline = moment(attributes.deadline).format(
          DATE_ISO_FORMAT
        );
      }
      this.$emit("changed", this.item, attributes);
    }
  }
};
</script>
