/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from "prop-types"
import { motion, AnimatePresence } from "framer-motion"

const transition = {
   duration: 0.2,
   ease: "easeInOut"
}

const variants = {
   open: { opacity: 1, height: 'auto'},
   collapsed: { opacity: 0, height: 0 }
}

const motionRules = {
   key:"content",
   initial:"collapsed",
   animate:"open",
   exit:"collapsed",
}

const AccordionContent = props => {
   const { children, toggle } = props
   return (
      <AnimatePresence initial={toggle.isShown}>
        {toggle.isShown && (
          <motion.section
            {...motionRules}
            variants={variants}
            transition={transition}
             {...props}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
   )
}

AccordionContent.propTypes = {
   children: PropTypes.node.isRequired,
   toggle: PropTypes.object.isRequired,
}

export default AccordionContent
