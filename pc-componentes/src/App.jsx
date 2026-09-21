import { useState } from 'react'

function App() {

  //let contador = 0;
  //metemos variable contador en el STATE DEL COMPONENTE, usando hook useState()
  // useState() devuelve un array con dos elementos: el valor actual del estado y una función para actualizarlo

  const valorStateContador = useState(0); // valor inicial del contador es 10

  console.log('valor devuelto por el hook useState() al meter variable contador en el STATE DEL COMPONENTE: ', valorStateContador);
  //el hook useState te devuelve un ARRAY con dos elementos:
  //- en la primera posicion esta el valor actual de la variable
  //- en la segunda posicion te devuelve una FUNCION QUE PERMITE ACTUALIZAR/MODIFICAR su valor desde codigo
  console.log(' - primera posicion del array: VALOR ACTUAL de la variable...', valorStateContador[0]);
  console.log(' - segunda posicion del array: FUNCION MODIFICADORA de la variable....', valorStateContador[1].toString());
  let contador = valorStateContador[0]; //valor actual del contador
  let setContador = valorStateContador[1]; //funcion que permite modificar el valor del contador

  function clickBoton(ev){
      console.log('evento0 interceptado en funcion click del boton...', ev);
      // actualizamos el valor del contador llamando a la funcion que nos devuelve el hook useState()
      setContador(contador + 1);
      //console.log('contador vale ahora: ', valorStateContador[0]);
      console.log('contador vale ahora: ', contador);
  }
      //console.log('contador vale ahora: ', contador);


  // }

  return (
    <>
      <h1>Vamos a comprobar lo que es el STATE de un componente de REACT</h1>
      {/* <p>Contador vale: {valorStateContador[0]}</p> */}
      <p>Contador vale: {contador}</p>
      <button className="btn btn-primary" onClick={ clickBoton }> INCREMENTA EL CONTADOR</button>
    </>
  )
}

export default App
