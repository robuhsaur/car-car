import React from 'react';



class AppointmentsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: "",
            appointments: [],
        }
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
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIP</th>
                                <th>VIN</th>
                                <th>Customer</th>
                                <th>Date and time</th>
                                <th>Technician</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.appointments ? this.state.appointments.map(appointment => {
                                return (
                                    <tr key={appointment.id}>
                                        <td className="text-warning">{(appointment.vip_status ? "YE" : null)}</td>
                                        <td>{appointment.vin}</td>
                                        <td>{appointment.customer}</td>
                                        <td>{new Date(appointment.date_time).toLocaleTimeString([], timeSettings)}</td>
                                        <td>{appointment.name}</td>
                                        <td>{appointment.reason}</td>

                                    </tr>
                                );
                            }) : null}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default AppointmentsList;