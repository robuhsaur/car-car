import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
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
