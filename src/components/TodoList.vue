<template>
  <v-simple-table fixed-header>
    <template v-slot:default>
      <caption>
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
        </tr>
      </thead>
      <tbody>
        <todo-item v-for="item in items" :item="item" :key="item.id" />
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "todo-list",
  props: ["items", "title"],
  components: { "todo-item": TodoItem },
};
</script>
