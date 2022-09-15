import React from 'react'

class CreateVehicleModel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pictureUrl: '',
            manufacturers: [],
        }
        this.handleName = this.handleName.bind(this);
        this.handlePictureURL = this.handlePictureURL.bind(this);
        this.handleManufacturerChange = this.handleManufacturerChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleName(event) {
        const value = event.target.value;
        this.setState({name:value});
    }

    handlePictureURL(event) {
        const value = event.target.value;
        
        this.setState({pictureUrl: value});
    }

    handleManufacturerChange(event) {
        const value = event.target.value;
        this.setState({manufacturerId: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.picture_url = data.pictureUrl
        data.manufacturer_id = data.manufacturerId
        delete data.pictureUrl
        delete data.manufacturerId
        delete data.manufacturers

        
        const modelUrl =  `http://localhost:8100/api/models/`
        const fetchConfig = {
            
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(modelUrl, fetchConfig);
        console.log(response)
        if (response.ok) {
            const cleared = {
                name: '',
                pictureUrl: '',
                manufacturer: '',
            }
            this.setState(cleared)
        }

    }

    async componentDidMount() {
        const url = 'http://localhost:8100/api/manufacturers/'
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({manufacturers: data.manufacturers})
        }
    }
    render() {
        return(
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a Vehicle Model </h1>
                        <form onSubmit={this.handleSubmit} id="create-vehicle-form">
                            <div className="form-floating mb-3">
                                
                                <input placeholder="Name" onChange={this.handleName} value={this.state.name} required type="text" id="name" name="vehicle_name" className="form-control"/>
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                
                                <input placeholder="picture_url" onChange={this.handlePictureURL} value = {this.state.picture_url} type="text" name="picture_url" id="picture_url" className="form-control"/>
                                <label htmlFor="picture_url">Picture URL</label>
                            </div>
                            <div className="mb-3">
                                
                                <select required onChange={this.handleManufacturerChange} value={this.state.manufacturer} id="manufacturer" name="manufacturer" className="form-select">
                                <option value="">Choose a manufacturer</option>
                                {this.state.manufacturers.map(manufacturer => {
                                    return(
                                        
                                        <option key={manufacturer.id} value ={manufacturer.id}>
                                            {manufacturer.name}
                                        </option>
                                    )
                                })}
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
          </div>
        )
    }
}

export default CreateVehicleModel

