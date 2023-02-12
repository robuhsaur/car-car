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


    handleSubmit = async (e) => {
        e.preventDefault()
        const putUrl = `${process.env.REACT_APP_SERVICE_API}/api/appointments`

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



