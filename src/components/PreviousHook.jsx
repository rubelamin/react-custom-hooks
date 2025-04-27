import React, { useState } from "react";
import PreviousChange from "./PreviousChange";

function PreviousHook() {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div>
      <h2>Previous Hook</h2>

      <select
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        <option>Slect Your Choice</option>
        <option value={"Next.js"}>Next.js</option>
        <option value={"Node.js"}>Node.js</option>
        <option value={"React.js"}>React.js</option>
      </select>
      <p>Selected: {selectedItem}</p>
      <PreviousChange item={selectedItem} />
    </div>
  );
}

export default PreviousHook;
