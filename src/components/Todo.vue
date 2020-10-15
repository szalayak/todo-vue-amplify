<template>
  <div>
    <todo-list
      :items="todos"
      title="Todos"
      @item-deleted="onTodoDeleted"
      @item-completed="onTodoCompleted"
    />
    <todo-list
      :items="doneTodos"
      title="Completed Todos"
      @item-deleted="onTodoDeleted"
      @item-uncompleted="onTodoUncompleted"
    />
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
  },
  methods: {
    onTodoDeleted(deleted) {
      this.todos = this.todos.filter(todo => todo.id !== deleted.id);
      this.doneTodos = this.doneTodos.filter(todo => todo.id !== deleted.id);
    },
    onTodoCompleted(completed) {
      this.todos = this.todos.filter(todo => todo.id !== completed.id);
      this.doneTodos.push(completed);
    },
    onTodoUncompleted(uncompleted) {
      this.doneTodos = this.doneTodos.filter(
        todo => todo.id !== uncompleted.id
      );
      this.todos.push(uncompleted);
    }
  }
};
</script>
