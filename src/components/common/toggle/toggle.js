import React, { useMemo, useState } from 'react'

const Toggle = show => {
   const initialState = show || false
   const [isShown, setIsShown] = useState(initialState)

   return useMemo(() => {
      return {
         isShown,
         hide: () => setIsShown(false),
         show: () => setIsShown(true),
         flip: () => setIsShown(!isShown),
      }
   }, [isShown])
}

const withToggle = Component => {
   return props => {
      const toggle = Toggle()
      return <Component {...props} toggle={toggle}/>
   }
}


export default Toggle
export { withToggle }
