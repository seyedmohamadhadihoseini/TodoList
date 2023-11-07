import { useDispatch } from "react-redux";
import { todoListActions } from "../../../Redux/Reducers/Todo";

export default function ColorSelection({ todo }) {
  const dispatch = useDispatch();
  const ChangeColorHandler = (e) => {
    const id = parseInt(e.target.attributes.belong.nodeValue);
    const color = e.target.value;
    dispatch({
      type: todoListActions.ChangeColor,
      payload: { id, color },
    });
  };
  return (
    <select
      defaultValue={todo.color}
      name="todo-color"
      id="todo-color"
      belong={todo.id}
      onChange={ChangeColorHandler}
    >
      <option value=""></option>
      <option value="Red">Red</option>
      <option value="Green">Green</option>
      <option value="Blue">Blue</option>
      <option value="Orange">Orange</option>
      <option value="Purple">Purple</option>
    </select>
  );
}
