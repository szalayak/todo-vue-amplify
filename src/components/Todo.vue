<template>
  <div>
    <todo-list :items="todos" title="Todos" />
    <todo-list :items="doneTodos" title="Completed Todos" />
  </div>
</template>

<script>
import data from "../data";
import TodoList from "./TodoList";
export default {
  name: "todo",
  data,
  components: {
    "todo-list": TodoList
  }
};
</script>
