import { useDispatch } from "react-redux";
import { todoListActions } from "../../../Redux/Reducers/Todo";
import StatusCheck from "./StatusCheck";
import ColorSelection from "./ColorSelection";
import closePng from '../../../img/close.png';
import { useContext } from "react";
import { HelperContext } from "../../../Context/Context";


export default function JobItem({ todo }) {
  const dispatch = useDispatch();
  const { UpdateAll } = useContext(HelperContext);
  const closeClick = (e) => {
    const id = parseInt(e.target.attributes.id.nodeValue);
    dispatch({
      type: todoListActions.Remove,
      payload: { id: id },
    });
    UpdateAll();
  };

  return (
    <li key={todo.id}>
      <StatusCheck
        todoId={todo.id}
        defaultActive={todo.isActive}
      />
      {todo.text}
      <ColorSelection todo={todo}/>
      <img alt="closePng" id={todo.id} src={closePng} onClick={closeClick} />
    </li>
  );
}
