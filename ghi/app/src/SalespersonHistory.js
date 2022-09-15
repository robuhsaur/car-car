import React from 'react'

class SalespersonHistory extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        salerecord: [],
        salepersons: [],
      }
      this.getSaleRecords = this.getSaleRecords.bind(this);
      this.handleSalesPerson = this.handleSalesPerson.bind(this)
    }
    
    handleSalesPerson(event) {
      const value = event.target.value
      this.setState({saleperson:value})
    }
    async getSaleRecords() {
      const url = 'http://localhost:8090/api/salesrecord/';
      const response = await fetch(url);
      try {
        if (response.ok) {
          const data = await response.json()
          this.setState({
            salerecord: data.salesrecord,
          })
        };
      } catch (error) {
        console.error(error);
      }
    }
    
    async getSalesPerson() {
      const salepUrl = 'http://localhost:8090/api/salesperson/'
      const salepresponse = await fetch (salepUrl)
      if (salepresponse.ok) {
          const salepdata = await salepresponse.json()
          this.setState({salepersons: salepdata.saleperson})
      }
    }
  
    async componentDidMount() {
      this.getSaleRecords();
      this.getSalesPerson();
    }
  
    render () {
      return (
        <>
          <div className="mb-3">
            <select required id="salesperson" onChange={this.handleSalesPerson} name="salesperson" className="form-select">
            <option value="">Select a Salesperson</option>
            {this.state.salepersons.map(salespsn => {
                return(
                    <option key={salespsn.id} value ={salespsn.id}>
                        {salespsn.name}
                    </option>
                )
            })}
            </select>
          </div>
          <table className="table table-striped table-hover table-bordered">
          <caption>Sales Records</caption>
          <thead className="table-dark">
            <tr>
              <th>Salesperson</th>
              <th>Employee ID</th>
              <th>Customer</th>
              <th>VIN</th>
              <th>Sale Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.salerecord.filter(
              sale => sale.saleperson.id.toString()=== this.state.saleperson).map(sale => {
                return (
                  <tr key={sale.id}>
                    <td>{sale.saleperson.name}</td>
                    <td>{sale.saleperson.number}</td>
                    <td>{sale.customer.name}</td> 
                    <td>{sale.automobile.vin}</td>
                    <td>{sale.price}</td>
                  </tr>
                )
              })
            }
          {/* {this.state.salerecord.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{sale.saleperson.name}</td>
                <td>{sale.saleperson.number}</td>
                <td>{sale.customer.name}</td> 
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            )
          })} */}
          </tbody>
        </table>
      </>
      )
    }
  }
  export default SalespersonHistory
