import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HelperContext } from "../../Context/Context";
import { GetTodoList, todoListActions } from "../../Redux/Reducers/Todo";

export default function StatusAll() {
  const dispatch = useDispatch();
  const {UpdateAll} = useContext(HelperContext);
  const todoList = useSelector(GetTodoList);
  const idList = todoList.map((todo) => todo.id);
  
  const CompletedList = todoList.filter((todo) => !todo.isActive);
  return (
    <div id="all-op-actions">
      <p>Actions</p>
      <button
        onClick={(e) => {
          const isActive = false;
          idList.forEach((id) => {
            dispatch({
              type: todoListActions.ChangeStatus,
              payload: { id, isActive },
            });
          });
          UpdateAll();
        }}
      >
        Mark All Completed
      </button>
      <button
        onClick={(e) => {
          CompletedList.forEach((todo) => {
            dispatch({
              type: todoListActions.Remove,
              payload: { id:todo.id }
            });
          });
          UpdateAll();
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}
