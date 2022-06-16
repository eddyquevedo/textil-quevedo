import React, { useEffect, useState } from 'react';
import { getFetch } from '../../helpers/getData.js';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    useEffect(() => {
      getFetch() //coloque getFech para traer todo los ids dentro del array de la lista(ultima modf)
        .then((res) => setData(res)) //ahora 'objeto' esta en la variable 'res' por lo que pasa a setearlo data y pasa de tener un objeto vacio a tener un objeto lleno.
        .catch(err => console.log(err))
      },[])
  return (
    <ItemDetail data={data}/> //mandar la informacion de data donde esta todo guardado
  )
}

export default ItemDetailContainer;