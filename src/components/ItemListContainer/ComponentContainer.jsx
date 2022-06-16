import React,{useState,useEffect} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/Itemlist'

const films =[
  {id:1 , image:"https://http2.mlstatic.com/D_NQ_NP_722880-MLA31009695852_062019-O.webp", title:"Máquina De Coser automatica Singer 2250 Brazo Libre",Text:' Costo: $47.000 '},
  {id:2 , image:"https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/MAQCOS07/1000x1000-MAQCOS07.jpg&w=1000&q=100", title:"Máquina de Coser Gadnic SW7000 16 Puntadas Portátil 2 Velocidades Pedal y Luz",Text:'Costo: $51.000'},
  {id:3 , image:"https://m.media-amazon.com/images/I/71CkasF8UGL._AC_SX679_.jpg",title:"Máquina De Coser industrial",Text:'Costo: $90.000'},
];
// la constante films se guarda en un estado(data) para poder enviarselo a ItemList usando el useEffect y cuando se monta se crea una promesa que vuelva en 2 seg.

const ComponentContainer = ({saludo}) => {
  const [data,setData] = useState([]); // el estado es data se inicia en un array vacio y con su setData pasan a ser una raiz de objetos luego se envia a itemlist.

  useEffect(() =>{ //crear una promesa que traiga el valor en unos 2 seg para simular que hay demoras en la base de datos y luego setear la data y al haber un cambio vuelve a renderizar.
    const getData = new Promise(resolve =>{ //se comporta como una pregunta podrias darme en 3seg
        setTimeout(() => {
          resolve(films)
        },2000); //aqui te devuelve en 2 seg.
    });
    getData.then(res => setData(res)); //captura esa respuesta y las devuelve y setea data 
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