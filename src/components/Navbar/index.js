import React, { useEffect, useState} from 'react';
import './Navbar.css';

export default function Navbar() {
    const [ firstClass, setFirstClass ] = useState("firstClass");
    
    function classChanger (firstClass) {
        setFirstClass = 'secondClass';
        return firstClass;
    }

    return (
		<div>
			<ul>
				<li className={firstClass}><button onClick={() => classChanger}>Item 1</button></li>
				<li className={firstClass}><button onClick={() => classChanger}>Item 2</button></li>
				<li className={firstClass}><button onClick={() => classChanger}>Item 3</button></li>
			</ul>
		</div>
	);
}