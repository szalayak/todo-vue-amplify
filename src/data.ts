import moment from "moment";
export const DATE_FORMAT = "DD/MM/YYYY";
export const DATE_ISO_FORMAT = "YYYY-MM-DD";
export default function() {
  return {
    todos: [
      {
        text: "Get some carrots",
        id: 1,
        deadline: moment("27/7/2018", DATE_FORMAT).toDate(),
        done: false
      },
      {
        text: "Do some magic",
        id: 2,
        deadline: moment("22/7/2018", DATE_FORMAT).toDate(),
        done: false
      },
      {
        text: "Go to the gym",
        id: 3,
        deadline: moment("24/7/2018", DATE_FORMAT).toDate(),
        done: false
      },
      {
        text: "Buy milk",
        id: 4,
        deadline: moment("30/7/2018", DATE_FORMAT).toDate(),
        done: false
      }
    ],
    doneTodos: [
      {
        text: "Eat some fruits",
        id: 5,
        deadline: moment("29/7/2018", DATE_FORMAT).toDate(),
        done: true
      },
      {
        text: "Have some fun",
        id: 6,
        deadline: moment("29/7/2018", DATE_FORMAT).toDate(),
        done: true
      }
    ]
  };
}
