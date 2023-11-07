import ColorFilter from "./ColorFilter";
import Remaining from "./Remaining";
import StatusAll from "./StatusAll";
import StatusFilter from "./StatusFilter";

export default function Filter() {
  return (
    <div id="filter-actions">
      <StatusAll />
      <Remaining />
      <StatusFilter/>
      <ColorFilter/>
    </div>
  );
}
