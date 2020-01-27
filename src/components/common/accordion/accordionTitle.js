/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from "prop-types"
import { useThemeUI } from 'theme-ui'
import merge from 'deepmerge'
import Link from '../accessibleLink'

const AccordionTitle = ({ text, children, onClick }) => {
   const { theme } = useThemeUI()
   const styles = merge(theme.styles.h4, theme.styles.a)

   return (
      <Link
         sx={styles}
         onClick={onClick}>
         {text}
         {children}
      </Link>
   )
}

AccordionTitle.propTypes = {
   children: PropTypes.node,
   onClick: PropTypes.func.isRequired,
   text: PropTypes.string.isRequired,
}

export default AccordionTitle
