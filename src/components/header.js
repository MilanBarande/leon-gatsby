import PropTypes from "prop-types"
import React from "react"
import Link from "./link"
import "./link.css"

const Header = () => (
  <header
    style={{
      display: "flex",
      justifyContent: "center",
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <Link to="/" style={{}} title="Home" className="home-link" />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
