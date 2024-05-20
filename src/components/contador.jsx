import { useState } from "react";
import React from 'react'; import '../components/contador.css'

function Contador(){
    const [contador, setContador] = useState(0)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () =>{
        setContador(contador - 1)
    }

    return(
        <div>
            <h2>Contador</h2>
            <p>Valor: {contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </div>
    )
}

export default Contador