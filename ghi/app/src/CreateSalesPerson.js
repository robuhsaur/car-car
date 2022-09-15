import React from 'react'

class CreateSalesPerson extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            number: '',
        }
        this.handleName = this.handleName.bind(this);
        this.handleNumber = this.handleNumber.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleName(event) {
        const value = event.target.value;
        this.setState({name:value});
    }

    handleNumber(event) {
        const value = event.target.value;
        this.setState({number: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log(data)
        const custUrl =  `http://localhost:8090/api/salesperson/new/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(custUrl, fetchConfig);
        if (response.ok) {
            const cleared = {
                name: '',
                number: '',
            }
            this.setState(cleared)
        }

    }
    render() {
        return(
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a Salesperson </h1>
                        <form onSubmit={this.handleSubmit} id="create-salesperson-form">
                            <div className="form-floating mb-3">
                                <input placeholder="Name" onChange={this.handleName} value={this.state.name} required type="text" id="name" name="vehicle_name" className="form-control"/>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input placeholder="number" onChange={this.handleNumber} value={this.state.number} type="text" name="employee_number" id="employee_number" className="form-control"/>
                                <label htmlFor="number">Employee Number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
          </div>
        )
    }
}
export default CreateSalesPerson
