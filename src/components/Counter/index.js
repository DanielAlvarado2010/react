import React, { useEffect, useState} from 'react';
import './Counter.css';

export default function Counter () {
    const [ counter, setCounter ] = useState(10);

    let colorCounter = counter % 2 === 0 ? "text-even" :"text-odd"

    useEffect(()=> {
        console.log('Me ejecuto cada que cambie el estado counter')
    });

    return (
        <div className='container'>
            <p className={colorCounter} > Counter: {counter}</p>
            <button onClick={()=> setCounter(counter +1)} className='btn'>Incrementar</button>
            <button onClick={()=> setCounter(counter -1)} className='btn'>Decrementar</button>
  
            
        </div>

    )
}
