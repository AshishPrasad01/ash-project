import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initial: ""

        }
    }

  

    updateDataKey=()=>{
        this.props.updateDataKey(this.state.initial)
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row sm-3">
                        <div className="col sm-6">
                            <div className="card sm-3">
                                <div className="card-header">
                                    <div className="card-body bg-primary text-white text-centre">
                                        <p className="h4"> Child Component</p>
                                    </div>
                                    <div className="card-body">
                                         <input
                                            onChange = {(e)=>{this.setState({initial:e.target.value})}}
                                            type="text" placeholder='enter text' ></input>
                                        <div>
                                            <button onClick={this.updateDataKey}>Click here</button>
                                        </div> 
                                        <div className="form-group">

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

export default Child