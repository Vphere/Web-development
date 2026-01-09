import React from "react";
import CounterClass from "./CounterClass";
  
class App extends React.Component{
  render(){
    return(
      <div>
        <h1>Class Component example</h1>
        <CounterClass name = "vaidik"/>
      </div>
    );
  }
}

export default App;