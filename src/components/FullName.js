import React from 'react';

const capitalizeWord = (word) => {
    if (!word){
    return "";
    }
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function FullName({name, lastName=''}) {
    
    const _name = capitalizeWord(name)
    const _lastName = capitalizeWord(lastName)
    return (
        <>
        <div>
            <h1>Hola a todos los koders, soy {_name} {_lastName}</h1>
        </div>
        </>
    );
}

export default FullName;