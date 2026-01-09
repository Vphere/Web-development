import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      todos: ["Learn React", "Practice Lifecycle Methods"],
      newTodo: ""
    };
    console.log("constructor: Component is being created");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps: Sync state with props if needed",props,state);
    return null; // no state change here
  }

  componentDidMount() {
    console.log("componentDidMount: Component mounted");
    // Example side effect: simulate API call
    setTimeout(() => {
      this.setState({ todos: [...this.state.todos, "Fetched Todo from API"] });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Decide if re-render is needed",nextProps,nextState);
    return true; // always re-render for demo
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: Capture info before DOM update");
    return `Previous todos count: ${prevState.todos.length}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: Component updated");
    console.log("Snapshot from getSnapshotBeforeUpdate:", snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Cleanup before component is removed");
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError: Error occurred",error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch: Log error details", error, info);
  }

  handleAddTodo = () => {
    if (this.state.newTodo.trim()) {
      this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: "" });
    }
  };

  render() {
    console.log("render: Rendering UI");
    if (this.state.hasError) {
      return <h2>Something went wrong!</h2>;
    }
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={(e) => this.setState({ newTodo: e.target.value })}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

export default TodoApp;