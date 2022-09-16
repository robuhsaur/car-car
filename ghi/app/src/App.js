import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateVehicleModel from './CreateVehicleModel'
import ListAutomobiles from './ListAutomobiles';
import ManufacturerList from './ManufacturerList';
import ManufacturerForm from './ManufacturerForm';
import VehicleModelList from './VehicleModelList';
import AutomobileForm from './AutomobileForm';
import CreateCustomer from './CreateCustomer';
import CreateSalesPerson from './CreateSalesPerson';
import SalesRecordListAll from './SalesRecordList';
import CreateSalesRecord from './CreateSalesRecord';
import SalespersonHistory from './SalespersonHistory';
import { ServiceAppointmentForm } from './ServiceForm';
import TechnicianForm from './TechnicianForm'
import AppointmentsList from './ServiceList'


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/models/create" element={<CreateVehicleModel />} />
          <Route path="/automobiles" element={<ListAutomobiles />} />
          <Route path="/manufacturers" element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route path="/manufacturers/create" element={<ManufacturerForm />} />
          <Route path="/models" element={<VehicleModelList />} />
          <Route path="/automobiles/create" element={<AutomobileForm />} />
          <Route path="/customers/create" element={<CreateCustomer />} />
          <Route path="/salesperson/create" element={<CreateSalesPerson />} />
          <Route path="/salesrecord" element={<SalesRecordListAll />} />
          <Route path="/salesrecord/create" element={<CreateSalesRecord />} />
          <Route path="/salesrecord/history" element={<SalespersonHistory />} />
        </Routes>
        <Routes>
          <Route path="/service" element={<AppointmentsList appointment={props.appointment} />} />
        </Routes>
        <Routes >
          <Route path="/service/new" element={<ServiceAppointmentForm />} />
        </Routes>
        <Routes >
          <Route path="/technician/new" element={<TechnicianForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




