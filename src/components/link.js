import { Link } from "gatsby"
import React, { Component } from "react"
import "./link.css"

const colors = [
  "#69ff18",
  "#4363cc",
  "#fc3e2a",
  "#feff05",
  "#ff68a5",
  "#9a8ed0",
  "#d3f6cf",
  "#06cee6",
  "#494c39",
]

class FunkyLink extends Component {
  state = {
    color: "white",
  }

  spinTheColorWheel = () => {
    this.interval = setInterval(() => {
      const newColor = colors[Math.floor(Math.random() * colors.length)]
      this.setState({ color: newColor })
    }, 100)
  }

  stopTheWheel = () => {
    clearInterval(this.interval)
    return this.setState({ color: "white" })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { url, title, className } = this.props
    const { color } = this.state
    return (
      <Link
        to={url}
        className={`link ${className}`}
        style={{ color }}
        onMouseOver={this.spinTheColorWheel}
        onMouseLeave={this.stopTheWheel}
      >
        {title}
      </Link>
    )
  }
}

export default FunkyLink
