import { useState } from 'react'


function Exemplo1() {
    /*Hooks-useState*/
    const [contador,setContador]=useState(0);
    /*funções*/

    const incrementar=() =>setContador( contador +1 )
    const decrementar= () => setContador ( contador - 1)

    return (
      <>
      <fieldset>
        <legend>Exemplo1</legend>
        <p>Valor:{contador}</p>
        <button onClick={incrementar}>Aumentar</button>
        <button onClick={decrementar}>Diminuir</button>
      </fieldset>
      </>
  )
}

export default Exemplo1
