import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { HelperContext } from "../../Context/Context";
import { FilterActionTypes } from "../../Redux/Reducers/Filter";

export const AvaiableColors = ["Green", "Red", "Blue", "Orange", "Purple"];
export default function ColorFilter() {
  const { UpdateAll } = useContext(HelperContext);
  const dispatch = useDispatch();
  function ColorFilterChangeHandler(e) {
    const selected = e.target.checked;
    const color = e.target.value;
    if (selected) {
      dispatch({
        type:FilterActionTypes.AddColor,
        payload:color,
      })
    }
    else {
      dispatch({
        type:FilterActionTypes.RemoveColor,
        payload:color
      })
    }
    UpdateAll();
  }
  const colorInputs = AvaiableColors.map((color) => {
    return (
      <div>
        <input
          name={`${color}-filter`}
          onChange={ColorFilterChangeHandler}
          type="checkbox"
          value={`${color}`}
        />
        <label htmlFor={`${color}-filter`}>{color}</label>
      </div>
    );
  });
  return (
    <div id="filter-by-color">
      <h3>Filter By Color</h3>
      {colorInputs}
    </div>
  );
}
