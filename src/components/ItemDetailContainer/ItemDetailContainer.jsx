import React, { useEffect, useState } from 'react';
import { getData } from '../../helpers/getData.js';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    useEffect(() => {
      getData()
        .then((res) => setData(res)) //ahora 'objeto' esta en la variable 'res' por lo que pasa a setearlo data y pasa de tener un objeto vacio a tener un objeto lleno.
      },[])
  return (
    <ItemDetail data={data}/> //mandar la informacion de data donde esta todo guardado
  )
}

export default ItemDetailContainer;