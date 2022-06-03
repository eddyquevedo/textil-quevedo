import CartWidget from "../CartWidget/CartWidget"

const Navbar = ({param1}) => {

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">INICIO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">QUIENES SOMOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MAQUINAS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">REPUESTOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">SERVICIOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">COMO LLEGAR </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACTO</a>
        </li>
        <div>
        <CartWidget />
        </div>
      </ul>
    </div>
  </div>
</nav>
    <h2>{param1}</h2>
</div>
  )
}

export default Navbar
