

//Consulta detalla de un producto
const objeto = {id:1, image:"https://m.media-amazon.com/images/I/71CkasF8UGL._AC_SX679_.jpg" , title:"Maquina de coser RECTA 2 agujas ",categoria:" Industrial",velocidad:"2200 RPM",precio:" 90.000 pesos"};

export const getData = () => {
  return new Promise( (resolve) => { //crea una promesa que en 3seg se va a resolver y la respuesta es 'objeto'
        setTimeout (()=>{
            resolve(objeto);
        },2000);
    })
}




