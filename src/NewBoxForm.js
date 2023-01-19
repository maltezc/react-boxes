import React, { useState } from "react";

const INITIAL_STATE = {
  height: '0',
  width: '0',
  backgroundColor: ""
};

/** Form for creating a box
 *
 * props
 * - addBox: function to create box
 *
 * state
 * - formData
 *
 *
 * BoxList > NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="heightInput">Height:</label>
      <input
        id="heightInput"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="widthInput">Width:</label>
      <input
        id="widthInput"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColorInput">Background Color:</label>
      <input
        id="backgroundColorInput"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add!</button>
    </form>
  );
}

export default NewBoxForm;
