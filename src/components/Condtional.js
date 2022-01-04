import React, { Component } from "react";

class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({});
  }

  // Buscar

  render() {
    return (
      <div>
        <p className={colorCounter}>Counter: {counter}</p>
        <div className="container">
          <button className="btn" onClick={() => setCounter(counter + 1)}>
            Add
          </button>
          <button className="btn" onClick={() => setCounter(counter - 1)}>
            Substract
          </button>
        </div>
      </div>
    );
  }
}
