import { useDispatch } from "react-redux";
import { getNewId, todoListActions } from "../../Redux/Reducers/Todo";

export default function InputNew() {
  const dispatch = useDispatch();
  const handleEnter = (e) => {
    if (e.code.includes("Enter")) {
      if (e.target.value.trim())
        dispatch({
          type: todoListActions.Add,
          payload: {
            text: e.target.value.trim(),
            color: "",
            isActive: true,
            id: getNewId(),
          },
        });
      e.target.value = "";
    }
  };
  return (
    <input
      type="text"
      placeholder="What needs to be done ?"
      name="new-todo"
      id="new-todo"
      onKeyDown={handleEnter}
    />
  );
}
