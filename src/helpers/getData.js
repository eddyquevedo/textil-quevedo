const films =[
    {id:1 , image:"https://http2.mlstatic.com/D_NQ_NP_722880-MLA31009695852_062019-O.webp", title:"Máquina De Coser automatica Singer 2250 Brazo Libre",Text:' Costo: $47.000 '},
    {id:2 , image:"https://images.bidcom.com.ar/resize?src=https://www.bidcom.com.ar/publicacionesML/productos/MAQCOS07/1000x1000-MAQCOS07.jpg&w=1000&q=100", title:"Máquina de Coser Gadnic SW7000 16 Puntadas Portátil 2 Velocidades Pedal y Luz",Text:'Costo: $51.000'},
    {id:3 , image:"https://m.media-amazon.com/images/I/71CkasF8UGL._AC_SX679_.jpg",title:"Máquina De Coser industrial",Text:'Costo: $90.000'},
];
  // la constante films se guarda en un estado(data) para poder enviarselo a ItemList usando el useEffect y cuando se monta se crea una promesa que vuelva en 2 seg.

export const getFetch = (id) => {
    return new Promise((resolve) =>{ //se comporta como una pregunta podrias darme en 2seg
            setTimeout(() => {
                if(id){
                    resolve(films.find(film => film.id===id))
                } else{
                    resolve(films)
                }
            },2000); //aqui te devuelve en 2 seg.
        })

    }






//En el caso que consulte el  detalla de un producto
const objeto = {id:1, image:"https://m.media-amazon.com/images/I/71CkasF8UGL._AC_SX679_.jpg" , title:"Maquina de coser RECTA 2 agujas ",categoria:" Industrial",velocidad:"2200 RPM",precio:" 90.000 pesos"};

export const getData = () => {
  return new Promise( (resolve) => { //crea una promesa que en 3seg se va a resolver y la respuesta es 'objeto'
        setTimeout (()=>{
            resolve(objeto);
        },2000);
    })
}




