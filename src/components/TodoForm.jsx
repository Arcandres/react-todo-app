import React from "react"
import './TodoForm.css'

class TodoForm extends React.Component {
  getData = e => (
    this.setState({
      [e.target.name]: e.target.value,
      completed: false
    })
  )

  sendData = e => {
    e.preventDefault()
    this.props.addTask(this.state)

    e.target.reset()
  }


  render() {
    return (
      <div className="card mb-5">
        <form className="card-body" onSubmit={this.sendData}>
          <div className="form-group">
            <input onChange={this.getData} className="form-control mb-2" name="title" placeholder="Title" required />
            <input onChange={this.getData} className="form-control mb-2" name="author" placeholder="Author" required />
            <input onChange={this.getData} className="form-control mb-2" name="description" placeholder="Description" required />
            <select onChange={this.getData} className="form-control mb-2" name="priority">
              <option>Select</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <button className="btn btn-danger">Submit</button>
        </form>
      </div>
    )
  }
}

export default TodoForm