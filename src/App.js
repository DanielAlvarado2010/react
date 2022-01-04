import "./App.css";

import { Outlet } from "react-router-dom";

import { Component } from "react";

// Components
import AppContainer from "./components/AppContainer";
// import { render } from "@testing-library/react";

// function App() {
//   return (
//     <AppContainer>
//       <Outlet />
//     </AppContainer>
//   );
// }

// Abajo está la forma de manejar App como clase a partir de Component
class App extends Component {
  render() {
    return (
      <AppContainer>
        <Outlet />
      </AppContainer>
    );
  }
}

export default App;
