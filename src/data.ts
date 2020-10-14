export default function() {
  return {
    todos: [
      {
        text: "Get some carrots",
        id: "i1",
        deadline: "27/7/2018",
        done: false,
      },
      {
        text: "Do some magic",
        id: "i2",
        deadline: "22/7/2018",
        done: false,
      },
      {
        text: "Go to the gym",
        id: "i3",
        deadline: "24/7/2018",
        done: false,
      },
      {
        text: "Buy milk",
        id: "i4",
        deadline: "30/7/2018",
        done: false,
      },
    ],
    doneTodos: [
      {
        text: "Eat some fruits",
        id: "i5",
        deadline: "29/7/2018",
        done: true,
      },
    ],
    todoBeingEdittedText: "",
    todoBeingEdittedDate: "",
    selectedEditTodo: "",
  };
}
