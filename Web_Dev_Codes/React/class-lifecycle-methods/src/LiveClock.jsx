import React from "react";

class LiveClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      theme: "light",
      prevTheme: null
    };
  }

  componentDidMount() {
    console.log("componentDidMount: starting clock");
    this.timerID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate: capturing theme change");
    if (prevState.theme !== this.state.theme) {
      return prevState.theme;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: updated");
    if (snapshot) {
      console.log(`Theme changed from ${snapshot} to ${this.state.theme}`);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: cleaning up timer");
    clearInterval(this.timerID);
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light"
    }));
  };

  render() {
    console.log("render: rendering UI");
    const { time, theme } = this.state;
    const style = {
      backgroundColor: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px",
      textAlign: "center",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      border: "5px solid darkblue",
      margin: "230px 560px",
      width: "300px"
    };

    return (
      <div style={style}>
        <h1>Live Clock</h1>
        <p>{time}</p>
        <button onClick={this.toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </div>
    );
  }
}

export default LiveClock;