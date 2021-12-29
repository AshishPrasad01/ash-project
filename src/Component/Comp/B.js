import React, { Component } from 'react'
import myContext from './Context'

 class B extends Component {
    render() {
        return (
            <div className='container mt-5'>
            <div className='card-header'>
                <button onchan>Click me</button>
                <div className='card-body'>
                    <h2>B Component</h2>
                    {/* <myContext.Consumer>
                            {(data)=>{
                                    return <div>

                                        <h2>{data.name}</h2>
                                    </div>

                            } }

                        </myContext.Consumer> */}
                    <div className='card-header'>

                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}
export default B
