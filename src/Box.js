import React from 'react'

const DEFAULT_HEIGHT_PX = '20';
const DEFAULT_WIDTH_PX = '20';
const DEFAULT_BACKGROUND_COLOR = 'green';

/** Box with specific height, width, backgroundColor
 *
 * Props:
 * - height
 * - width
 * - backgroundColor
 * - removeSelf
 *
 * State:
 * - none
 *
 * BoxList -> Box
 */

function Box({
  height=DEFAULT_HEIGHT_PX,
  width=DEFAULT_WIDTH_PX,
  backgroundColor=DEFAULT_BACKGROUND_COLOR,
  removeSelf
  }) {

  return (
    <>
      <div
        className='Box'
        style={{
          height: height + 'px',
          width: width + 'px',
          backgroundColor: backgroundColor
        }}
      ></div>

      <button
        onClick={removeSelf}
      >
        Remove!
      </button>
    </>
  )
}

export default Box