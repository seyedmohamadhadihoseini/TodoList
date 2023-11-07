import { useDispatch } from "react-redux";
import { todoListActions } from "../../../Redux/Reducers/Todo";
import { useContext } from "react";
import { HelperContext } from "../../../Context/Context";

export default function StatusCheck({todoId,defaultActive}) {
    const {UpdateAll} = useContext(HelperContext);
    const dispatch = useDispatch();
    const onChangeStatus = (e)=>{
        const isActive = e.target.checked;
        const id = parseInt(e.target.value);
        dispatch({
            type:todoListActions.ChangeStatus,
            payload:{id,isActive}
        })
        UpdateAll();
    }
  return (
      <input type="checkbox" checked={defaultActive} className="checkbox-round" value={todoId} onChange={onChangeStatus} />
  )
}
