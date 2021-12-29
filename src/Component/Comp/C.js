import React, { Component } from 'react'
import myContext from './Context'

 class C extends Component {
    render() {
        return (
            <div className='container mt-5'>
            <div className='card-header'>
                <div className='card-body'>
                    <h2>C Component</h2>
                    <div className='card-header'>
                    <myContext.Consumer>
                            {(data)=>{
                                    return <div>

                                        <h2>{data.name}</h2>
                                    </div>
                    
                            } }
                            
                            </myContext.Consumer>
                    </div>
                </div>
            </div>
            
        </div>
        )
    }
}
export default C