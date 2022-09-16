import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink className="text-decoration-underline navbar-brand" to="/">CarCar</NavLink>
          <ul className="dropdown">
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li><NavLink className="dropdown-item" aria-current="page" to="customers/create/">New Customers</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/salesrecord/create">New Sales Records</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/salesrecord">All Sales Records</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/salesrecord/history">Sales History</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/salesperson/create">New Salesperson</NavLink></li>
            </ul>
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </button>
            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <li><NavLink className="dropdown-item" aria-current="page" to="/manufacturers/create">New Manufacturer</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/manufacturers">All Manufacturers</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/models/create">New Vehicle Model</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/models">All Models</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/automobiles/create">New Automobile</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/automobiles">All Automobiles</NavLink></li>
            </ul>
            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </button>
            <ul className="dropdown-menu dropdown-menu-dark open" aria-labelledby="dropdownMenuButton2">
              <li><NavLink className="dropdown-item" aria-current="page" to="/technician/new">Create a Technician</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/service/new">Create Service</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/service/history/">Service History</NavLink></li>
              <li><NavLink className="dropdown-item" aria-current="page" to="/service">Service Appointments</NavLink></li>
            </ul>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav;

//////////////////////////////////////////////////////////////////////////////////////////

// ORIGINAL CODE, REFACTORED ABOVE

// import { NavLink } from 'react-router-dom';
// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">CarCar</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="dropdown" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/manufacturers/create">Create a Manufacturer</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/models">Vehicle Models</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/models/create">Create a Vehicle Model</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/automobiles/create">Create an Automobile</NavLink>
//             </li>
//           </ul>
//         </div>


//         <li className="nav-item">
//           <NavLink className="nav-link" to="/customers/create">Create Customer</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/salesperson/create">Create Salesperson</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/salesrecord">Salesrecord</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/salesrecord/create">Create Sales Record</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="/salesrecord/history">Salesperson History</NavLink>
//         </li>

//         <NavLink className="nav-link active" aria-current="page" to="/service">Service</NavLink>
//         <li className="nav-item">
//           <NavLink className="nav-link active" aria-current="page" to="/service/new">Make an Appointment</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link active" aria-current="page" to="/technician/new">Make a Technician</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link active" aria-current="page" to="/service/history">Service History</NavLink>
//         </li>
//       </div>
//     </nav >
//   )
// }
// export default Nav;


