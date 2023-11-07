import { produce } from "immer";

let todosLastId = 0;
export const getNewId = () => {
  todosLastId += 1;
  return todosLastId;
};
const todoInitialState = {
  todoList: [
    {
      text: "Design Ui",
      color: "Red",
      isActive: true,
      id: getNewId(),
    },
    {
      text: "discover state",
      color: "Blue",
      isActive: true,
      id: getNewId(),
    },
  ],
};
export const todoListActions = {
  Add: "Add",
  Remove: "Remove",
  ChangeColor: "ChangeColor",
  ChangeStatus: "ChangeStatus",
};
export const TodosReducer = produce((state, action) => {
  if (action.type === todoListActions.Add) {
    state.todoList.push({
      ...action.payload,
      id: getNewId(),
    });
  } else if (action.type === todoListActions.Remove) {
    state.todoList = state.todoList.filter(
      (todo) => todo.id !== action.payload.id
    );
  } else if (action.type === todoListActions.ChangeColor) {
    state.todoList[
      state.todoList.findIndex((todo) => todo.id === action.payload.id)
    ].color = action.payload.color;
  } else if (action.type === todoListActions.ChangeStatus) {
    state.todoList[
      state.todoList.findIndex((todo) => todo.id === action.payload.id)
    ].isActive = action.payload.isActive;
  }
}, todoInitialState);

export const GetTodoList  = state => state.todos.todoList;