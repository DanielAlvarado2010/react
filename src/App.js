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
import { listCharacters } from "./services/characters.js";

function App() {
  const [characters, setCharacters] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    const list = async () => {
      const { results, info } = await listCharacters();
      setCharacters(results);
      setData(info);
    };
    list();
  }, []);

  const handleClick = async (action) => {
    if (action === "next" && data.next != null) {
      const page = data.next.split("?")[1];
      const { results, info } = await listCharacters(page);
      setCharacters(results);
      setData(info);
    }
    if (action === "prev" && data.prev != null) {
      const page = data.prev.split("?")[1];
      const { results, info } = await listCharacters(page);
      setCharacters(results);
      setData(info);
    }
  };

  console.log(data);

  return (
    <div className="App">
      <div className="fixed-container">
        <button onClick={() => handleClick("prev")} className="btn btn-dark">
          Previous
        </button>
        <button onClick={() => handleClick("next")} className="btn btn-dark">
          Next
        </button>
      </div>
      {characters.map(({ id, image, name, species, status }) => (
        <CartoonCards
          key={id}
          image={image}
          name={name}
          species={species}
          status={status}
        />
      ))}
    </div>
  );
}

export default App;
