import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div style={styles.counter}>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>

        <h2>{this.state.count}</h2>

        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

const styles = {
  counter: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
};

// export default CounterClass;   // This line is not needed as we have directly done it at line no. 3