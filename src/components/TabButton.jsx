import React from 'react'

function TabButton({ isActive, action, children }) {
    if (isActive) {
        return <b className='bg-sky-600 text-slate-200 px-4 py-2'>{ children}</b>
    }
  return (
      <button className='bg-slate-500 text-slate-200 px-4 py-2' onClick={() => action()}>{ children}</button>
  )
}

export default TabButton