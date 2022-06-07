import React from 'react'
import ItemCount from '../ItemCount/ItemCount'


const ComponentContainer = ({saludo}) => {

  const onAdd = (cantidad) =>{ //la funcion onAdd indica la cantidad que el usuario escogio al final
    console.log(`Tienes ${cantidad} unidades`); // el valor de 'cantidad' es de count osea que viene del hijo(ItemCount) para poder controlarlo en el padre(ComponentContainer).
  }

  return (
    <div>
    <h2>{saludo}</h2>
    <ItemCount initial={1} stock ={10} onAdd ={onAdd} /> {/*initial indica con que numero comenzar, el stock lo max que llega ,onAdd indica el numero que el usuario escogio al final */}
    </div>
  )
}

export default ComponentContainer