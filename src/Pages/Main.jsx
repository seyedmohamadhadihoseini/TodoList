import { useState } from "react";
import List from "./List";
import Filter from "./Filter";
import { HelperContext } from "../Context/Context";

export default function Main() {
  const [, forceUpdate] = useState(0);
  const UpdateAll = () => {
    forceUpdate((t) => t + 1);
  };
  return (
    <HelperContext.Provider value={{UpdateAll}}>
      <div id="todo-all">
        <List />
        <Filter/>
      </div>
    </HelperContext.Provider>

  );
}
