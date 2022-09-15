import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/create">Create a Manufacturer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models">Vehicle Models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/create">Create a Vehicle Model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/create">Create an Automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/create">Create Customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesperson/create">Create Salesperson</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesrecord">Salesrecord</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesrecord/create">Create Sales Record</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/salesrecord/history">Salesperson History</NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav;



