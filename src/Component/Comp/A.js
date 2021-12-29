import React, { Component } from 'react'
import B from './B'
import C from './C'
import myContext from './Context'


 class A extends Component {
constructor(props) {
    super(props)

    this.state = {
         name: "A2n",
         city: "hyd"
    }
}


    render() {
        return (
            <div className='container mt-5'>
                <div className='card-header'>
                <button
                onClick = {()=>{
                    this.setState({
                        name:"A2n updated",
                        city: "Banaglore"
                    })
                }}
                >Click me</button>
                    <div className='card-body'>
                        <h2>A Component</h2>
                        <h2>B Component 
                           <myContext.Provider value = {this.state}>
                            <C />
                            </myContext.Provider>
                            </h2>
                        {/* <h2>C Component <C /></h2> */}
                        <div className='card-header'>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default A
