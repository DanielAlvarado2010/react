import logo from './logo.svg';
import './App.css';

//Components
import  Greeting  from './components/Greeting';
import FullName from './components/FullName';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import UserName from './components/UserName';

import { useEffect, useState } from "react";



const _users = [
	{
		id: 1,
		firstName: "Selene",
		lastName: "Chavez",
	},
	{
		id: 2,
		firstName: "Omar",
		lastName: "Mijangos",
	},
	{
		id: 3,
		firstName: "Luis",
		lastName: "Balán",
	},
	{
		id: 4,
		firstName: "Odon",
		lastName: "Balán",
	},
];


function App() {

	const [users, setUsers] = useState([]);

  useEffect(() => {
		// await fetch()
		setTimeout(() => {
			const response = _users;
			setUsers(response);
		}, 3000);
	}, []);

	const usersUI = users.map(({ id, firstName, lastName }) => (
		<UserName key={id} firstName={firstName} lastName={lastName} />
	));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
				{usersUI}
		  	<UserName firstName={"Fuera del"} lastName={"map"} />
        <Greeting name="Daniel" />
        <FullName name="Daniel" lastName="Alvarado" />
        <Calculator operador="multiplicacion" numeroA={4} numeroB={6} />
        <Counter />
        <Navbar />
        <UserName />

      </header>
    </div>
  );
}

export default App;
