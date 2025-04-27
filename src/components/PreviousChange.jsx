import React from "react";
import usePrevious from "../hooks/usePrevious";

function PreviousChange({ item }) {
  const prevValue = usePrevious(item);
  return <p>Previous: {prevValue}</p>;
}

export default PreviousChange;
