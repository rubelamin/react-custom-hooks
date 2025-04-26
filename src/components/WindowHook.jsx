import React from 'react'
import useWindow from '../hooks/useWindow';

function WindowHook() {
    const { windowHeight, windowWidth } = useWindow();
  return (
    <div>
        
        <p>
          Your Device Width: {windowWidth}
        </p>
        <p>
          Your Device Height: {windowHeight}
        </p>

      </div>
  )
}

export default WindowHook