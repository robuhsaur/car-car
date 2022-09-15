import React from 'react'

class CreateCustomer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            phone: '',
        }
        this.handleName = this.handleName.bind(this);
        this.handleAddress = this.handleAddress.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleName(event) {
        const value = event.target.value;
        this.setState({name:value});
    }

    handleAddress(event) {
        const value = event.target.value;
        this.setState({address: value});
    }

    handlePhone(event) {
        const value = event.target.value;
        this.setState({phone: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        const custUrl =  `http://localhost:8090/api/customers/new/`;
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
                address: '',
                phone: '',
            }
            this.setState(cleared)
        }

    }
    render() {
        return(
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a Customer </h1>
                        <form onSubmit={this.handleSubmit} id="create-customer-form">
                            <div className="form-floating mb-3">
                                <input placeholder="Name" onChange={this.handleName} value={this.state.name} required type="text" id="name" name="vehicle_name" className="form-control"/>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input placeholder="address" onChange={this.handleAddress} value={this.state.address} type="text" name="picture_url" id="picture_url" className="form-control"/>
                                <label htmlFor="address">Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input placeholder="phone_number" onChange={this.handlePhone} value={this.state.phone} type="text" name="picture_url" id="picture_url" className="form-control"/>
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
          </div>
        )
    }
}
export default CreateCustomer
