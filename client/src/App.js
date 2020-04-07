import React, { Component } from "react";
import StageCard from "./Component/Card";
import AddStageCard from "./Component/AddCard";

class App extends Component {
  state = {
    stages: [],
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/stage")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ stages: data.data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <AddStageCard />
          {this.state.stages.map((stage) => {
            return StageCard(stage);
          })}
        </div>
      </div>
    );
  }
}

export default App;
