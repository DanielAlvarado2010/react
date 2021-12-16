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

// Parte 1 clase 7

// function App() {
//   const [characters, setCharacters] = useState([]);
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const list = async () => {
//       const { results, info } = await listCharacters();
//       setCharacters(results);
//       setData(info);
//     };
//     list();
//   }, []);

//   const handleClick = async (action) => {
//     if (action === "next" && data.next != null) {
//       const page = data.next.split("?")[1];
//       const { results, info } = await listCharacters(page);
//       setCharacters(results);
//       setData(info);
//     }
//     if (action === "prev" && data.prev != null) {
//       const page = data.prev.split("?")[1];
//       const { results, info } = await listCharacters(page);
//       setCharacters(results);
//       setData(info);
//     }
//   };

//   console.log(data);

//   return (
//     <div className="App">
//       <div className="fixed-container">
//         <button onClick={() => handleClick("prev")} className="btn btn-dark">
//           Previous
//         </button>
//         <button onClick={() => handleClick("next")} className="btn btn-dark">
//           Next
//         </button>
//       </div>
//       {characters.map(({ id, image, name, species, status }) => (
//         <CartoonCards
//           key={id}
//           image={image}
//           name={name}
//           species={species}
//           status={status}
//         />
//       ))}
//     </div>
//   );
// }

function App() {
  const [input1, setInput1] = useState("Numero");
  const [input2, setInput2] = useState("Nombre");
  const [input3, setInput3] = useState("Fecha");

  return (
    <div className="App">
      <div className="fixed-container">
        <form>
          <div>
            <label htmlFor="input1">Numero de tarjeta :</label>
            <input
              type="number"
              id="input1"
              onChange={(event) => setInput1(event.target.value)}
              value={input1}
            />
            <label htmlFor="input2">Nombre:</label>
            <input
              type="text"
              id="input2"
              onChange={(event) => setInput2(event.target.value)}
              value={input2}
            />
            <label htmlFor="input3">Fecha:</label>
            <input
              type="text"
              id="input3"
              onChange={(event) => setInput3(event.target.value)}
              value={input3}
            />
            <div className="creditCardFormat">
              <h1>Numero de tarjeta: {input1}</h1>
              <h1>Nombre: {input2}</h1>
              <h1>Fecha: {input3}</h1>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
