import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Display Box form and list of Boxes
 * props: none
 *
 * state:
 * -boxes --> [{height, width, color}, {height, width, color}]
 *
 * App > Boxlist > Box,NewBoxForm
 */
function BoxList() {

  const [boxes, setBoxes] = useState([]);

  return (
    <div className="BoxList"> {/* convention to have class name capitalized because we're in the component.  */}
      <NewBoxForm />

      <h3>Box List</h3>
      <ul className="BoxList-boxes">

      </ul>
    </div>
  );
}

export default BoxList;
