import React from "react"

class Navigation extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="text-white">
          {this.props.title}
        <span className="badge badge-pill badge-light ml-3">
          {this.props.tasks}
        </span>
        </span>
      </nav>
    )
  }
}

export default Navigation
