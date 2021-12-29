import React, { Component } from 'react'
import Child from '../Child/Child'

class Parent extends Component {
    constructor() {
        super()

        this.state = {
            childData: ""
        }
    }
    setUpdate = (data) => {
        this.setState({
            childData: data

     })

    }

    render() {
        return (
            <div>
                <div className="container mt-5" >
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-warning text-white text-centre">
                                    <p>Parent component </p>
                                    <div className="card-body">
                                        <div className="card-footer bg-primary sm-3" >

                                            <Child updateDataKey={this.setUpdate} />
                                            Child Data: {this.state.childData}
                                            
                                        </div> 
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        )
    }
}
export default Parent