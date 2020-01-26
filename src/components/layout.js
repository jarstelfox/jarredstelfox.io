/** @jsx jsx */
import 'typeface-inter'
import Helmet from 'react-helmet'
import PropTypes from "prop-types"
import { Styled } from 'theme-ui'
import { Global } from '@emotion/core'

import { jsx } from 'theme-ui'

const Container = props => {
  return <div sx={{ maxWidth: '34em', mx: 'auto', px: 5, py: 8 }} {...props} />
}

const Layout = ({ children }) => {
  return (
    <Styled.root>
      <Helmet></Helmet>
      <Global styles={{ body: { margin: 0 } }} />
      <Container>{children}</Container>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
