import React from 'react';

class AutomobileForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "",
            year: "",
            vin: "",
            models: [],
        }
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleVinChange = this.handleVinChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) { 
        event.preventDefault();
        const data = {...this.state};
        delete data.models;

        let automobileUrl = `http://localhost:8100/api/automobiles/`;
        let fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        let response = await fetch(automobileUrl, fetchConfig);
        if (response.ok) {
            const newAutomobile = await response.json();
            const cleared = {
                color: "",
                year: "",
                vin: "",
            }
            this.setState(cleared);
        }


    }
    handleColorChange(event) {
        const value = event.target.value;
        this.setState({color: value});
    }

    handleYearChange(event) {
        const value = event.target.value;
        this.setState({year: value});
    }

    handleVinChange(event) {
        const value = event.target.value;
        this.setState({vin: value});
    }

    handleModelChange(event) {
        const value = event.target.value;
        this.setState({model_id: value});
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/models/";
        const response = await fetch(url);
    
        if (response.ok) {
            const data = await response.json();
            this.setState({models: data.models});
    }
}

    render () {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Add an automobile to inventory</h1>
                <form onSubmit={this.handleSubmit} id="create-automobile-form">
                    <div className="form-floating mb-3">
                        <input onChange={this.handleColorChange} placeholder="Color" required type="text" name="color" value={this.state.color} id="color" className="form-control" />
                        <label htmlFor="color">Color</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleYearChange} placeholder="Year" required type="text" name="year" value={this.state.year} id="year" className="form-control" />
                        <label htmlFor="year">Year</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input onChange={this.handleVinChange} placeholder="VIN" required type="text"  name="vin" value={this.state.vin} id="vin" className="form-control" />
                        <label htmlFor="vin">VIN</label>
                    </div>
                    <div className="mb-3">
                        <select onChange={this.handleModelChange} required id="model" name = "model" value={this.state.model} className="form-select">
                        <option value="">Choose a model</option>
                        {this.state.models.map(model => {
                            return (
                                <option key={model.id} value={model.id}>
                                {model.name}
                                </option>
                            );
                            })}
                        </select>
                    </div>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
            </div>

        );
    }
}

export default AutomobileForm
