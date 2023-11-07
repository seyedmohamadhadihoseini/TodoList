import { useDispatch, useSelector } from "react-redux";
import { FilterActionTypes, StatusType } from "../../Redux/Reducers/Filter";
import { useContext } from "react";
import { HelperContext } from "../../Context/Context";


export default function StatusFilter() {
  const {UpdateAll} = useContext(HelperContext);
  const dispatch = useDispatch();
  const handleClick =(e)=>{
    dispatch({
      type:FilterActionTypes.ChangeStatus,
      payload:e.target.innerText
    });
    UpdateAll();
  }
  const InitialStatus = useSelector(state=>state.filter.Status);
  const StatusList =Object.keys(StatusType).map(status=>{
    return <li key={status} className={InitialStatus===status?"item-selected":""} onClick={handleClick}>{status}</li>
  })
  return (
    <div id="filter-by-status">
        <h3>Filter By Status</h3>
        <ul>
          {StatusList}
        </ul>
      </div>
  )
}
