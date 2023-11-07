import { useSelector } from "react-redux";
import { GetTodoList } from "../../Redux/Reducers/Todo";

export default function Remaining() {
  const numberOfActive = useSelector(GetTodoList).filter(
    (todo) => todo.isActive
  ).length;
  return (
    <div id="remaining-todo-part">
      <h3>remaining todos</h3>
      {numberOfActive} item left
    </div>
  );
}
