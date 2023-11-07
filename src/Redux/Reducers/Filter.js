import { produce } from "immer";

export const StatusType = {
  Completed: "Completed",
  Active: "Active",
  All: "All",
};

export const FilterActionTypes = {
  ChangeStatus: "Filters/ChangeStatus",
  AddColor: "Filters/AddColor",
  RemoveColor: "Filters/RemoveColor",
};
const FilterInitialState = {
  Status: StatusType.All,
  Colors: [],
};
export const FilterReducer = produce((state, action) => {
  if (action.type === FilterActionTypes.ChangeStatus)
    state.Status = action.payload;
  else if (action.type === FilterActionTypes.AddColor) {
    if (!state.Colors.includes(action.payload))
      state.Colors.push(action.payload);
  } else if (action.type === FilterActionTypes.RemoveColor) {
    state.Colors = state.Colors.filter((c) => c !== action.payload);
  }
}, FilterInitialState);

export const GetFilterStatus = (state) => state.filter.Status;
export const GetFilterColors = state => state.filter.Colors;
