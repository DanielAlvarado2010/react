import logo from "./logo.svg";
import "./App.css";
import "../src/components/CartoonCards/cartoon.css";

//Components
import Greeting from "./components/Greeting";
import FullName from "./components/FullName";
import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import UserName from "./components/UserName";
import CartoonCards from "./components/CartoonCards";

import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      console.table(response);
      const data = await response.json();
      console.log(data);
      setCards(data.results);
    };

    getCards();
  }, []);

  console.log(cards.results);

  const characters = cards.map(({ id, name, status, species, image }) => (
    <CartoonCards
      key={id}
      name={name}
      status={status}
      species={species}
      image={image}
    />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <div className="card-container">{characters}</div>
      </header>
    </div>
  );
}

export default App;
