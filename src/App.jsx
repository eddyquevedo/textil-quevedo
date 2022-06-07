//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/Navbar';
import Titulo from './components/titulo/titulo';
import ComponentContainer from './components/ItemListContainer/ComponentContainer';

function App() { //componente contenedor
  let contenido = 'Buenos Aires - Argentina' // estado
  let tituloApp = 'MAQUINAS DE COSER DON QUEVEDO'


  return (
    <>
      <Navbar param1= {contenido}/>
      <Titulo titulo={tituloApp} subTitulo='Encontrá acá la herramienta que Buscás'/>
      <ComponentContainer saludo ='Bienvenidos'/>
    </>
  );
}
export default App;







