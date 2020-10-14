<template>
  <tr>
    <td>{{ item.text }}</td>
    <td>{{ item.deadline }}</td>
  </tr>
</template>

<script>
export default {
  name: "todo-item",
  props: ["item"]
};
</script>
