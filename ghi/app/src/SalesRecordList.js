import React from 'react'

class SalesRecordListAll extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        salerecord: [],
      }
      this.getSaleRecords = this.getSaleRecords.bind(this);
    }
    
    
    async getSaleRecords() {
      const url = 'http://localhost:8090/api/salesrecord/';
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          this.setState({
            salerecord: data.salesrecord,
          })
        };
      } catch (e) {
        console.error(e);
      }
    }
  
    async componentDidMount() {
      this.getSaleRecords();
    }
  
    render () {
      return (
        
        <>
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
          {this.state.salerecord.map(sale => {
            return (
              <tr key={sale.id}>
                <td>{sale.saleperson.name}</td>
                <td>{sale.saleperson.number}</td>
                <td>{sale.customer.name}</td> 
                <td>{sale.automobile.vin}</td>
                <td>{sale.price}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </>
      )
    }
  }
  export default SalesRecordListAll

