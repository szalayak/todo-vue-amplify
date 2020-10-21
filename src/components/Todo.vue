<template>
  <div>
    <todo-dialog
      :title="$t('newTodo')"
      :open="newDialog"
      :item="newItem"
      @closed="onNewItemCancelled"
      @saved="onNewItemSaved"
    />
    <v-toolbar>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn class="mr-2" dark @click="onNewItem"
          ><v-icon>mdi-plus</v-icon>{{ $t("newTodo") }}</v-btn
        >
      </v-row>
    </v-toolbar>
    <todo-list
      :items="todos"
      :title="$t('open')"
      @item-deleted="onTodoDeleted"
      @item-completed="onTodoCompleted"
      @item-changed="onItemChanged"
    />
    <todo-list
      :items="doneTodos"
      :title="$t('completed')"
      @item-deleted="onTodoDeleted"
      @item-uncompleted="onTodoUncompleted"
      @item-changed="onItemChanged"
    />
  </div>
</template>

<script>
import TodoList from "./TodoList";
import TodoDialog from "./TodoDialog";
import { API } from "aws-amplify";
import { listTodos } from "../graphql/queries";
import { createTodo, updateTodo, deleteTodo } from "../graphql/mutations";
import moment from "moment";
import { DATE_ISO_FORMAT } from "../data";
export default {
  name: "todo",
  data: function() {
    return {
      todos: [],
      doneTodos: [],
      newDialog: false,
      newItem: {}
    };
  },
  created() {
    this.loadData();
  },
  components: {
    "todo-list": TodoList,
    "todo-dialog": TodoDialog
  },
  methods: {
    loadData: async function() {
      const { data } = await API.graphql({
        query: listTodos
      });

      this.todos = data.listTodos.items.filter(item => !item.done);
      this.doneTodos = data.listTodos.items.filter(item => item.done);
    },
    onTodoDeleted(deleted) {
      this.deleteTodo(deleted.id);
    },
    onTodoCompleted(completed) {
      this.updateTodo(completed.id, { done: true });
    },
    onTodoUncompleted(uncompleted) {
      this.updateTodo(uncompleted.id, { done: false });
    },
    onItemChanged(item, changedAttributes) {
      this.updateTodo(item.id, changedAttributes);
    },
    onNewItemCancelled() {
      this.newDialog = false;
    },
    onNewItemSaved(attributes) {
      this.newDialog = false;
      this.createTodo({
        ...attributes,
        deadline: moment(attributes.deadline || undefined).format(
          DATE_ISO_FORMAT
        )
      });
    },
    onNewItem() {
      this.newItem = {};
      this.newDialog = true;
    },
    async createTodo(attributes) {
      await API.graphql({
        query: createTodo,
        variables: { input: attributes }
      });
      this.loadData();
    },
    async updateTodo(id, changedAttributes) {
      await API.graphql({
        query: updateTodo,
        variables: { input: { id, ...changedAttributes } }
      });
      this.loadData();
    },
    async deleteTodo(id) {
      await API.graphql({
        query: deleteTodo,
        variables: { input: { id } }
      });
      this.loadData();
    }
  }
};
</script>
