import React from 'react'
import logo from './logo.svg'
import './App.css'
import Navigation from "./components/Navigation"
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // Objects array
      todos: []
    }
  }

  getTasks() {
    this.setState(({
      // Empty array as a default value
      todos: JSON.parse(localStorage.getItem('tasks')) || []
    }))
  }

  addTask = task => {
    this.setState()
    // Check for empty task
    if (!task) {
      return
    }

    let tasks = []

    if (!localStorage.tasks) {
      /**
       * Lets create the local storage
       */
      tasks.push(task)
      return localStorage.setItem('tasks', JSON.stringify(tasks))

    }

    // Retrieve the storage
    tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.push(task)

    // Rewrite the storage with new data
    localStorage.setItem('tasks', JSON.stringify(tasks))

    // Populate the state
    this.setState(({
      todos: JSON.parse(localStorage.getItem('tasks'))
    }))
  }

  deleteTask = key => {
    this.setState(prevState => {

      // Remove the task from the state
      prevState.todos.splice(key, 1)

      // Rewrite the storage without removed data
      localStorage.setItem('tasks', JSON.stringify(this.state.todos))

      return this.state
    })
  }

  /**
   * Load tasks 
   */
  componentDidMount() {
    this.getTasks()
  }

  /**
   * built-in render method
   */
  render() {
    const todos = this.state.todos.map((todo, key) => {
      if (!todo) {
        return null;
      }

      return (<div className="col-md-3 mb-4" key={key}>
        <div className="card">
          <div className="card-header">
            <h3>{todo.title}</h3>
            <span className="badge bagde-pill badge-danger ml-2">
              {todo.priority}
            </span>
          </div>
          <div className="card-body">
            <p>{todo.description}</p>
            <div className="mb-4">
              <mark>{todo.author}</mark>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => this.deleteTask(key)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>)
    })

    return (
      <div className="App">
        <Navigation title="Tasks" tasks={todos.length} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="mt-4">
            <TodoForm addTask={this.addTask} />
          </div>
          <div className="row mt-4">
            {todos}
          </div>
        </div>
      </div >
    )
  }
}

export default App
