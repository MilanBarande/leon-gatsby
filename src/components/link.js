import { Link } from "gatsby"
import React, { Component } from "react"
import "./link.scss"

const colors = [
  "#CC1100",
  "black"
]

class FunkyLink extends Component {
  state = {
    color: "#CC1100",
  }

  spinTheColorWheel = () => {
    this.interval = setInterval(() => {
      const newColor = colors[Math.floor(Math.random() * colors.length)]
      this.setState({ color: newColor })
    }, 100)
  }

  stopTheWheel = () => {
    clearInterval(this.interval)
    return this.setState({ color: "#CC1100" })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { url, title, className, isExternal } = this.props
    const { color } = this.state
    return isExternal ?
      <a
        style={{ color }}
        onMouseOver={this.spinTheColorWheel}
        onMouseLeave={this.stopTheWheel}
        className='link' href={url} target="_blank">{title}</a>
      : (
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
