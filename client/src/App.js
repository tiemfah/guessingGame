import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <ul>
          {this.state.stages.map((stage) => {
            return (
              <li key={stage._id}>
                <Link to={`play/${stage._id}`}>
                  <p>Stage: {stage._id}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
