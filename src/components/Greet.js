import react, { Component } from "react";

class Greet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hola {this.props?.firstName}</div>;
  }
}

export default Greet;
