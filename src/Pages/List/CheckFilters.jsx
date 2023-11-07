import { useSelector } from "react-redux";
import { GetFilterColors, GetFilterStatus, StatusType } from "../../Redux/Reducers/Filter";

export default function CheckFilters(todo) {
  const filterStatus = useSelector(GetFilterStatus);
  const Colors = useSelector(GetFilterColors);
  if (filterStatus !== StatusType.All) {
    let currentFilter = filterStatus === StatusType.Active;
    if (currentFilter ^ todo.isActive) {
      return false;
    }
  }
  if (Colors.length === 0) return true;
  return Colors.includes(todo.color);
}
