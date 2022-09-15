import React from "react";

import { NavLink } from 'react-router-dom';


class ManufacturerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {manufacturers: []}
        // this.deleteHat = this.deleteHat.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:8100/api/manufacturers/');
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({manufacturers: data.manufacturers});
        }
    }

//   async deleteHat(hat) {
//     await fetch(`http://localhost:8090/api/hats/${hat.id}/`, { method: 'DELETE' });
//     let index = this.state.hats.indexOf(hat);
//     let updated_hats = [...this.state.hats];
//     updated_hats.splice(index,1)
//     this.setState({hats: updated_hats})
//   }

    render() {

        return (
        <React.Fragment>
        <div className="container-fluid">
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {this.state.manufacturers.map(manufacturer => {
                return (
                    <tr key={manufacturer.name}>
                        <td>{ manufacturer.name }</td>
                        {/* <td><button onClick={() => this.deleteHat(hat)}>Delete</button></td> */}
                    </tr>
                );
            })}  
            </tbody>
        </table>
        </React.Fragment>
        )
    }
}


export default ManufacturerList
