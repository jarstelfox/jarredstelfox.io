import React, { useCallback } from 'react'

const Link = ({ children, onClick, ...props }) => {
   const handleClick = useCallback(
      e => {
         e.preventDefault()
         return onClick?.call(this, e)
      },
      [onClick],
   )

   return (
      <a href="#javascript" {...props} onClick={handleClick}>
         {children}
      </a>
   )
}

export default Link;
