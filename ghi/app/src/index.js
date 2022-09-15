import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

<<<<<<< HEAD
async function loadManufacturers() {
  const response = await fetch('http://localhost:8100/api/manufacturers/');
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App manufacturers={data.manufacturers} />
      </React.StrictMode>
    )
  } else {
    console.error(response);
  }
}
loadManufacturers();

=======
async function loadServices() {
  const response = await fetch("http://localhost:8080/api/appointments/");
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.log("nah", response);
  }
}

loadServices();
>>>>>>> 10f5ffd0da0d5e8a215bfc5b92d7a925ef2ce4d0
