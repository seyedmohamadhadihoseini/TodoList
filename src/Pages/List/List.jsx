import { useSelector } from "react-redux";
import InputNew from "./InputNew";
import { GetTodoList } from "../../Redux/Reducers/Todo";
import Job from "./JobItem/JobItem";

import {
  GetFilterColors,
  GetFilterStatus,
  StatusType,
} from "../../Redux/Reducers/Filter";

export default function List() {
  const filterStatus = useSelector(GetFilterStatus);
  const Colors = useSelector(GetFilterColors);
  const todoList = useSelector(GetTodoList).map((todo) => {
    const currentFilter = filterStatus === StatusType.Active;
    let falseCon = currentFilter ^ todo.isActive;
    if (filterStatus !== StatusType.All && falseCon) return null;
    if (Colors.includes(todo.color) || Colors.length === 0)
      return <Job key={todo.id} todo={todo} />;
    return null;
  });
  return (
    <>
      <InputNew />
      <ul>{todoList}</ul>
    </>
  );
}
