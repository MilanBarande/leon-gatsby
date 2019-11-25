import { Link } from "gatsby"
import React, { Component } from "react"

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
    const that = this
    this.interval = setInterval(function() {
      const newColor = colors[Math.floor(Math.random() * colors.length)]
      that.setState({ color: newColor })
    }, 100)
  }

  stopTheWheel = () => {
    clearInterval(this.interval)
    return this.setState({ color: "white" })
  }

  render() {
    const { url, title } = this.props
    const { color } = this.state
    return (
      <Link
        to={url}
        className="link"
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
