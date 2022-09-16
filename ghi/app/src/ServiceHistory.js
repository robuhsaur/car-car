import React from "react";

class ServiceHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            search: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // async componentDidMount() {
    //     const url = "http://localhost:8080/api/appointments/";
    //     const response = await fetch(url);
    //     if (response.ok) {
    //         const data = await response.json();
    //         this.setState(({appointments: data.appointments}))
    //         console.log(data.appointments)
    //     }
    // }
    async handleSubmit(event) {
        event.preventDefault()
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // this.setState(({appointments: data.appointments}))
            console.log(data.appointments)

            const test = data.appointments.filter((appointment) => {
                return appointment.vin === this.state.search
            })
            this.setState({ appointments: test })
            console.log(test);
        }
    }


    handleChange(event) {
        const value = event.target.value;
        this.setState({ search: value })
    }

    render() {
        return (
            <>
                <div>
                    <form id="search-by-vin-form">
                        <div className="input-group mb-3 mt-5">
                            <input value={this.state.search} onChange={this.handleChange}
                                type="text" className="form-control"
                                placeholder="Enter VIN to search" id="search" name="search" />
                            <button onClick={this.handleSubmit} className="input-group-text">Search by VIN</button>
                        </div>
                    </form>

                    <h1>Service Appointments History</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIN</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Technician</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.appointments.map(appointment => {


                                return (
                                    <tr key={appointment.id}>

                                        <td>{appointment.vin}</td>
                                        <td>{appointment.customer}</td>
                                        <td>{new Date(appointment.date_time).toLocaleDateString()}</td>
                                        <td>{new Date(appointment.date_time).toLocaleTimeString('en-US', { timeZone: "UTC", hour: "2-digit", minute: "2-digit" })}</td>
                                        <td>{appointment.technician.name}</td>
                                        <td>{appointment.reason}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default ServiceHistory;



// import React from 'react';


// class AppointmentsList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             status: "",
//             appointments: [],
//         }
//         // this.deleteItem = this.deleteItem.bind(this); //
//         // this.finishedApp = this.finishedApp.bind(this); //


//     }

//     // Loads everything into a list on the page
//     async componentDidMount() {
//         const url = "http://localhost:8080/api/appointments/";
//         const response = await fetch(url);
//         if (response.ok) {
//             const data = await response.json();
//             this.setState({ appointments: data.appointments });
//         }
//     }


//     async search() {
//         // the appointment instance / state has a vin attribute, we want to compare that to the search
//         // if vin value has search value, then filter the list
//         if (appointment.status === true)
//             return appointments.map(eachApp => {
//                 return (eachApp.complete && searchTerm.toLowerCase().includes(eachApp.vin.toLowerCase().slice(0, searchTerm.length))) ?
//                     (<tr key={eachApp.id}>
//                         <td>{eachApp.vin}</td>
//                         <td>{eachApp.customer}</td>
//                         <td>{eachApp.date_time.slice(0, 10)}</td>
//                         <td>{eachApp.date_time.slice(11, 16)}</td>
//                         <td>{eachApp.technician.name}</td>
//                         <td>{eachApp.reason}</td>
//                     </tr>
//                     ) : ""
//             })
//     }







//     render() {
//         let timeSettings = { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };

//         return (
//             <>

//                 <div className="my-3 container">
//                     <div className="input-group">
//                     </div>
//                 </div>
//                 <div>
//                     <h1>Service History</h1>
//                     <table className="table table-striped table-dark">
//                         <thead>
//                             <tr>
//                                 <th>VIP</th>
//                                 <th>VIN</th>
//                                 <th>Customer</th>
//                                 <th>Date and time</th>
//                                 <th>Technician</th>
//                                 <th>Reason</th>

//                             </tr>
//                         </thead>
//                         <tbody>

//                             {this.state.appointments.filter(appointments => appointments.status === true).map(appointment => {
//                                 return (
//                                     <tr key={appointment.id}>
//                                         <td className="text-warning">{(appointment.vip_status ? "YUP" : null)}</td>
//                                         <td>{appointment.vin}</td>
//                                         <td>{appointment.customer}</td>
//                                         <td>{new Date(appointment.date_time).toLocaleTimeString([], timeSettings)}</td>
//                                         <td>{appointment.name}</td>
//                                         <td>{appointment.reason}</td>


//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </>
//         )
//     }
// }

// export default AppointmentsList;