import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      combination: [],
      hint: "",
      author: "",
      count: 0,
      isSent: false,
      enableSubmit: false
    };

    // This binding is necessary to make `this` work in the callback
    this.addToCombination = this.addToCombination.bind(this);
  }

  addToCombination(char) {
    this.setState(() => ({
      combination: this.state.combination.concat(char),
      count: this.state.count + 1,
    }));
    if (this.state.count >= 3) {
        this.setState(() => ({
            enableSubmit: true
          }));
    }
  }

  handleHintChange = (e) => {
    this.setState({ hint: e.target.value });
  };

  handleNameChange = (e) => {
    this.setState({ author: e.target.value });
  };

  handleSubmit = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        combination: this.state.combination,
        hint: this.state.hint,
        author: this.state.author,
      }),
    };
    fetch("http://localhost:3000/api/stage", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id, isSent: true }));
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          <li style={{ display: "inline", padding: "2%" }}>
            {this.state.count > 0 ? this.state.combination[0] : "_"}
          </li>
          <li style={{ display: "inline", padding: "2%" }}>
            {this.state.count > 1 ? this.state.combination[1] : "_"}
          </li>
          <li style={{ display: "inline", padding: "2%" }}>
            {this.state.count > 2 ? this.state.combination[2] : "_"}
          </li>
          <li style={{ display: "inline", padding: "2%" }}>
            {this.state.count > 3 ? this.state.combination[3] : "_"}
          </li>
        </ul>
        <label htmlFor="hint">hint</label>
        <input
          type="text"
          value={this.state.hint}
          onChange={this.handleHintChange}
        ></input>
        <label htmlFor="name">name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        ></input>
        <ul>
          <button onClick={() => this.addToCombination("A")}>A</button>
          <button onClick={() => this.addToCombination("B")}>B</button>
          <button onClick={() => this.addToCombination("C")}>C</button>
          <button onClick={() => this.addToCombination("D")}>D</button>
        </ul>
        <input type="submit" value="Submit" disabled={!this.state.enableSubmit} onClick={this.handleSubmit} />

        <h1>{this.state.isSent ? "created": ""}</h1>
      </div>
    );
  }
}

export default CreateStage;
