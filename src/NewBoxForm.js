import React, { useState } from "react";

/** Form for creating a box
 * props
 * -function to create box
 *
 * state
 * - formData
 *
 *
 * BoxList > NewBoxForm
 *  */

function NewBoxForm() {
  const [formData, setFormData] = useState({
    height: 0,
    width: 0,
    backgroundColor: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form className="NewBoxForm">
      <label htmlFor="height-input">Height:</label>
      <input id="height-input" name="height" />
      <label htmlFor="width-input">Width:</label>
      <input id="width-input" name="width" />
      <label htmlFor="background-color-input">Background Color:</label>
      <input id="background-color-input" name="backgroundColor" />
      <button>Add!</button>
    </form>
  );
}

export default NewBoxForm;
