
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Inicio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Maquinas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Repuestos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Como llegar </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar