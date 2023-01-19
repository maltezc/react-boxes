import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

/** Display Box form and list of Boxes
 * props: none
 *
 * state:
 * -boxes --> [{height, width, backgroundColor, id}, ...]
 *
 * App > Boxlist > Box, NewBoxForm
 */

function BoxList() {

  const [boxes, setBoxes] = useState([]);

  function removeBoxAtIdx(removeIdx) {
    setBoxes(currState =>
      currState.filter((box, idx) => idx !== removeIdx)
    );
  }

  function addBox(box) {
    const newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div className="BoxList"> {/* convention to have class name capitalized because we're in the component.  */}
      <NewBoxForm
        addBox={addBox}
      />

      <h3>Box List</h3>
      <ul className="BoxList-boxes">
        { boxes.map((box, idx) =>
          <Box
            key={box.id}
            height={box.height}
            width={box.width}
            backgroundColor={box.backgroundColor}
            removeSelf={() => removeBoxAtIdx(idx)}
            />
        ) }
      </ul>
    </div>
  );
}

export default BoxList;
