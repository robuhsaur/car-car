import React from 'react'

class CreateSalesRecord extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            salepersons: [],
            customers: [],
            autos: [],
            price: '',
        }
        
        this.handleSalesPerson = this.handleSalesPerson.bind(this)
        this.handleAutomobile = this.handleAutomobile.bind(this)
        this.handleCustomer = this.handleCustomer.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

 
    handleSalesPerson(event) {
        const value = event.target.value;
        this.setState({saleperson:value});
    }
    
    handleAutomobile(event) {
        const value = event.target.value;
        this.setState({automobile:value})
    }

    handleCustomer(event) {
        const value = event.target.value;
        this.setState({customer:value})
    }

    handlePrice(event) {
        const value = event.target.value
        this.setState({price:value})
    }

    
    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.autos
        delete data.salepersons
        delete data.customers
        const url =  `http://localhost:8090/api/salesrecord/new/`
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        };
        const response = await fetch(url, fetchConfig);
        const autoBoolUrl = `http://localhost:8100/api/automobiles/${this.state.automobile}/`
        const boolfetchConfig = {
            method: "PUT",
            body: JSON.stringify({sold:true}),
            headers: {
                'content-Type': 'application/json'
            }
        };
        const boolResponse = await fetch(autoBoolUrl, boolfetchConfig)
        if (boolResponse.ok) {
            console.log("yay")
        }else {console.log("NOOO")}

    
        if (response.ok) {
            const cleared = {
                salespersons: '',
                customers: '',
                automobile: '',
                price: ''
            }
            this.setState(cleared)
        }

    }
    async componentDidMount() {
        const autoUrl = 'http://localhost:8100/api/automobiles/'
        const autoresponse = await fetch (autoUrl)
        if (autoresponse.ok){
            
            let autodata = await autoresponse.json()
            for(let i=0; i <(autodata.autos).length; i+=1){
                if(autodata.autos[i].sold===true){
                    let removed = autodata.autos.splice(i,1)
                }
            }
                this.setState({autos: autodata.autos})
        }
        const custUrl = 'http://localhost:8090/api/customers/'
        const custresponse = await fetch(custUrl)
        if (custresponse.ok){
            const custdata = await custresponse.json()
            this.setState({customers: custdata.customer})
        }
        const salepUrl = 'http://localhost:8090/api/salesperson/'
        const salepresponse = await fetch (salepUrl)
        if (salepresponse.ok) {
            const salepdata = await salepresponse.json()
            this.setState({salepersons: salepdata.saleperson})
        }
    }
    render() {
        return(
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a Sales Record </h1>
                        <form onSubmit={this.handleSubmit} id="create-salesrecord-form">
                            {/* Salesperson dropdown */}
                            <div className="mb-3">
                                
                                <select required id="salesperson" onChange={this.handleSalesPerson} name="salesperson" className="form-select">
                                <option value="">Choose a Salesperson</option>
                                {this.state.salepersons.map(salespsn => {
                                    return(
                                        <option key={salespsn.id} value ={salespsn.id}>
                                            {salespsn.name}
                                        </option>
                                    )
                                })}
                                </select>
                            </div>
                            {/* automobile dropdown form */}
                            <div className="mb-3">
                                
                                <select required id="automobile" onChange={this.handleAutomobile} name="automobile" className="form-select">
                                <option value="">Choose an Automobile</option>
                                {this.state.autos.map(car => {
                                    return(
                                        <option key={car.vin} value ={car.vin}>
                                            
                                            {car.model.name} 
                                        </option>
                                    )
                                })}
                                </select>
                            </div>
                            {/* Customer Dropdown */}
                            <div className="mb-3">
                                
                                <select required id="customer" onChange={this.handleCustomer} name="customer" className="form-select">
                                <option value="">Choose a Customer</option>
                                {this.state.customers.map(person => {
                                    return(
                                        <option key={person.id} value ={person.id}>
                                            {person.name}
                                        </option>
                                    )
                                })}
                                </select>
                            </div>
                            {/* Form component for adding in money */}
                            <div className="mb-3">
                                <input type="text" onChange={this.handlePrice} className="form-control" id="sales-price-input" placeholder="Sales Price" />
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
          </div>
        )
    }
}
export default CreateSalesRecord

