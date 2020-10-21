<template>
  <v-sheet class="mb-2 pa-2" color="white" elevation="1">
    <v-simple-table fixed-header>
      <template v-slot:default>
        <caption class="text-h5">
          {{
            title
          }}
        </caption>
        <thead>
          <tr>
            <th class="text-left" width="40%">
              {{ $t("text") }}
            </th>
            <th class="text-left" width="30%">
              {{ $t("deadline") }}
            </th>
            <th class="text-left" width="30%">{{ $t("actions") }}</th>
          </tr>
        </thead>
        <tbody>
          <todo-item
            v-for="item in items"
            :item="item"
            :key="item.id"
            @edited="onItemEdited"
            @deleted="onItemDeleted"
            @completed="onItemCompleted"
            @uncompleted="onItemUncompleted"
            @changed="onItemChanged"
          />
        </tbody>
      </template>
    </v-simple-table>
  </v-sheet>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "todo-list",
  props: ["items", "title"],
  components: { "todo-item": TodoItem },
  methods: {
    onItemEdited(item) {
      alert(item.text);
    },
    onItemDeleted(item) {
      this.$emit("item-deleted", item);
    },
    onItemUncompleted(item) {
      this.$emit("item-uncompleted", item);
    },
    onItemCompleted(item) {
      this.$emit("item-completed", item);
    },
    onItemChanged(item, changedAttributes) {
      this.$emit("item-changed", item, changedAttributes);
    }
  }
};
</script>
