import React from 'react'

function Popups({ openPopup, children }) {
  let {closed, setclosed} = openPopup;

   let handlePopupMenu = () => {
    setclosed(
      !closed
    )
  }
  
  return (
    <div onClick={handlePopupMenu} className='z-10 absolute flex justify-center bg-popup w-full h-full top-0 left-0'>
      {children}
    </div>
  )
}

export default Popups