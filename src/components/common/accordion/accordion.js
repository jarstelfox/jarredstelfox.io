/** @jsx jsx */
import { jsx } from 'theme-ui'
import AccordionTitle from "./accordionTitle"
import AccordionContent from "./accordionContent"
import React, { useCallback } from 'react'
import { withToggle } from "../toggle/toggle"
import PropTypes from "prop-types"

const Accordion = ({ text, children, toggle, onClick }) => {
   const handleClick = useCallback(
      e => {
         toggle.flip()
         return onClick?.call(this, e)
      },
      [onClick, toggle],
   )

   return (
      <>
      <AccordionTitle text={text} onClick={handleClick}/>
      <AccordionContent
         toggle={toggle}
      >
        {children}
      </AccordionContent>
      </>
   )
}

Accordion.propTypes = {
   children: PropTypes.node.isRequired,
   onClick: PropTypes.func,
   toggle: PropTypes.object.isRequired,
   text: PropTypes.string.isRequired,
}

export default withToggle(Accordion)
