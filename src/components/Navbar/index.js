import React, { useEffect, useState} from 'react';
import './Navbar.css';

export default function Navbar() {
    const [ itemStyle, setClass ] = useState(0); 
    
    const classChanger = (change) => setClass(change);

    const clickedOption = (element) => (itemStyle === element ? "active-li" : "" )

    const parrChanger = (element) => (itemStyle=== element ? "active-p" : "deactive-p")

    return (
		<div>
			<ul>
				<li><button className={clickedOption(1)} onClick={() => classChanger(1)}>Item 1</button></li>
				<li><button className={clickedOption(2)} onClick={() => classChanger(2)}>Item 2</button></li>
				<li><button className={clickedOption(3)} onClick={() => classChanger(3)}>Item 3</button></li>
			</ul>
            <p className={parrChanger(1)}>Esto se despliega si se presiona el primer boton</p>
            <p className={parrChanger(2)}>Si se presiona el segundo boton esto se desplegara</p>
            <p className={parrChanger(3)}>Ultima opción seleccionada al picar el ultimo boton</p>
		</div>
	);
}