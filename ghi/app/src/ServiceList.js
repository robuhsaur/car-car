import React from 'react';


class AppointmentsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "",
            appointments: [],
        }
        this.deleteItem = this.deleteItem.bind(this); //
        this.finishedApp = this.finishedApp.bind(this); //


    }

    // Loads everything into a list on the page
    async componentDidMount() {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ appointments: data.appointments });
        }
    }


    async deleteItem(event) {
        const id = event.target.value
        const url = `http://localhost:8080/api/appointments/${id}/`
        const fetchConfig = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const finishedStatus = await response.json();
            console.log('status', finishedStatus)
        }
        window.location.reload(false);
    }

    async finishedApp(event) {
        const id = event.target.value
        const url = `http://localhost:8080/api/appointments/${id}/`
        const fetchConfig = {
            method: "PUT",
            body: JSON.stringify({ status: true }),
            headers: {
                "Content-Type": "application/json",
            },
        }
        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            const finishedStatus = await response.json();
            console.log('status', finishedStatus)
        }
        // window.location.reload(false);
    }






    render() {
        let timeSettings = { timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" };

        return (
            <>
                <div className="my-3 container">
                    <div className="input-group">
                    </div>
                </div>
                <div>
                    <h1>Service Appointments</h1>
                    <table className="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th>VIP</th>
                                <th>VIN</th>
                                <th>Customer</th>
                                <th>Date and time</th>
                                <th>Technician</th>
                                <th>Reason</th>
                                <th>Cancel</th>
                                <th>Complete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.appointments.filter(appointments => appointments.status === false).map(appointment => {
                                return (
                                    <tr key={appointment.id}>
                                        <td className="text-warning">{(appointment.vip_status ? "YUP" : null)}</td>
                                        <td>{appointment.vin}</td>
                                        <td>{appointment.customer}</td>
                                        <td>{new Date(appointment.date_time).toLocaleTimeString([], timeSettings)}</td>
                                        <td>{appointment.name}</td>
                                        <td>{appointment.reason}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={this.deleteItem} id={appointment.id} value={appointment.id} >Cancel</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={this.finishedApp} id={appointment.id} value={appointment.id} >Completed</button>
                                        </td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default AppointmentsList;