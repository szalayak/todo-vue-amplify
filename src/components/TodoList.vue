<template>
  <v-sheet class="mb-2 pa-2" color="white" elevation="1">
    <v-simple-table fixed-header>
      <template v-slot:default>
        <caption class="text-h4">
          {{
            title
          }}
        </caption>
        <thead>
          <tr>
            <th class="text-left">
              Text
            </th>
            <th class="text-left">
              Deadline
            </th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <todo-item v-for="item in items" :item="item" :key="item.id" />
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
  components: { "todo-item": TodoItem }
};
</script>
