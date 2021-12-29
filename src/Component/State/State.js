import React, { Component, createRef } from 'react'

 class State extends Component {

   
    

    constructor(props) {
        super(props)
    
        this.state = {
             name:"abc"
        }
        this.inputRef = createRef()
    }
    update =()=>{
        alert(this.state.name)
    }
    


    getData=()=>{
        console.log (this.inputRef.current.value)

    }

    
    render() {
        
        return (
            <div>
                <div className = "container mt-5">
                    <div className = "card-header bg-danger text-white text-centre">
                        <div className = "card-body bg-primary text-white text-centre">
                            <button onClick = {this.update}>Click here</button>
                            <input 
                            onChange = {(e)=>{this.setState({
                                name: e.target.value

                            })}}
                            type="text" ></input>
                        
                            <div className = "footer bg-secondary text-white text-centre">
                            <h2>hello  {this.state.name}</h2>
                            <button onClick={this.getData}>Click Meeeee</button>
                            <input 
                            ref={this.inputRef}
                            type= "text" placeholder='enter text'></input>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default State