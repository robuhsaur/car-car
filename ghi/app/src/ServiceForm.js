import React from "react";

export class ServiceAppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vin: '',
            customer: '',
            date_time: '',
            technician: '',
            technicians: [],
            reason: '',
        };

        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleCustomerNameChange = this.handleCustomerNameChange.bind(this);
        this.handleChangeDateTime = this.handleChangeDateTime.bind(this);
        this.handleTechnicianChange = this.handleTechnicianChange.bind(this);
        this.handleReasonChange = this.handleReasonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({ vin: value })
    }

    handleCustomerNameChange(event) {
        const value = event.target.value;
        this.setState({ customer: value })
    }

    handleChangeDateTime(event) {
        const value = event.target.value;
        this.setState({ date_time: value })
    }


    handleTechnicianChange(event) {
        const value = event.target.value;
        this.setState({ technician: value })
    }

    handleReasonChange(event) {
        const value = event.target.value;
        this.setState({ reason: value })
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.technicians;
        const newAptUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(newAptUrl, fetchConfig);
        if (response.ok) {
            const newApt = await response.json();
            console.log(newApt);

            const cleared = {
                vin: '',
                customer: '',
                date_time: '',
                technician: '',
                reason: '',
            };
            this.setState(cleared);
        }
    }
    async componentDidMount() {
        Promise.all([
            fetch('http://localhost:8080/api/technicians/'),
        ])
            .then(
                ([technicians]) => {
                    return Promise.all([
                        technicians.json(),
                    ])
                })
            .then(
                ([technicians]) => {
                    this.setState(technicians);
                })
    }



    render() {
        return (
            <>
                <div className="row">
                    <div className="shadow p-4 mt-4">
                        <h1>Create Appointment</h1>
                        <form onSubmit={this.handleSubmit} id="create-appointment-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleVinChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                                <label htmlFor="vin">VIN</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleCustomerNameChange} placeholder="Customer Name" required type="text" name="customer" id="customer" className="form-control" />
                                <label htmlFor="customer">Customer Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeDateTime} value={this.state.date_time} placeholder="Date time" required type="datetime-local" step="900" name="date_time" id="date_time" className="form-control" />
                                <label htmlFor="date_time">Date-time</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleReasonChange} placeholder="Reason" required type="text" name="reason" id="reason" className="form-control" />
                                <label htmlFor="Reason">Reason</label>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleTechnicianChange} placeholder="Technician" required name="technicians" id="technicians" className="form-select">
                                    <option value="">Choose a Technician</option>
                                    {this.state.technicians.map(technician => {
                                        return (
                                            <option key={technician.id} value={technician.id}>
                                                {technician.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <button className="btn btn-outline-dark">Create</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
