import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Header from "./header"

const Layout = ({ children, className }) => (
  <div
    className={className}
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      paddingTop: 0,
    }}
  >
    <Header />
    <main>
      {children}
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
