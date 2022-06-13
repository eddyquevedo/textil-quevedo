import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const objeto = {id:1, image:"https://m.media-amazon.com/images/I/71CkasF8UGL._AC_SX679_.jpg" , title:"Tipo: maquina de coser Overlock",categoria:"Categoria: Industrial",precio:"Precio: 90.000 pesos"};

const ItemDetailContainer = () => {
    const [data,setData] = useState({});
    useEffect(() => {
        const getData = new Promise(resolve => { //crea una promesa que en 3seg se va a resolver y la respuesta es 'objeto'
            setTimeout (()=>{
                resolve(objeto);
            },2000);
        });
        getData.then(res => setData(res)); //ahora 'objeto' esta en la variable 'res' por lo que pasa a setearlo data y pasa de tener un objeto vacio a tener un objeto lleno.
    },[])
  return (
    <ItemDetail data={data}/> //mandar la informacion de data
  )
}

export default ItemDetailContainer;