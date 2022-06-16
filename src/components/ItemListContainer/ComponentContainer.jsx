import React,{useState,useEffect} from 'react'
import { getFetch } from '../../helpers/getData';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/Itemlist'


const ComponentContainer = ({saludo}) => {
  const [data,setData] = useState([]); // el estado es data se inicia en un array vacio y con su setData pasan a ser una raiz de objetos luego se envia a itemlist.
  useEffect(() =>{ //crear una promesa que traiga el valor en unos 2 seg para simular que hay demoras en la base de datos y luego setear la data y al haber un cambio vuelve a renderizar.
    getFetch()
      .then((res) => setData(res)); //captura esa respuesta y las devuelve y setea data 
  },[])

  const onAdd = (cantidad) =>{ //la funcion onAdd indica la cantidad que el usuario escogio al final
    console.log(`Tienes ${cantidad} unidades`); // el valor de 'cantidad' es de count osea que viene del hijo(ItemCount) para poder controlarlo en el padre(ComponentContainer).
  }

  return (
    <div>
        <h2>{saludo}</h2>
        <ItemCount initial={1} stock ={10} onAdd ={onAdd} /> {/*initial indica con que numero comenzar, el stock lo max que llega ,onAdd indica el numero que el usuario escogio al final */}
        <ItemList data ={data}/>
    </div>
  )
}

export default ComponentContainer