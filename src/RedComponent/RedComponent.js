import React, { Component } from 'react'
import action from '../Component/Action/Action'

 class RedComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
         name:"A2n updated",
         city: "city updated"
    }
}
sendData =()=>{
action(this.state.name)
}

sendDataPassword=()=>{
action(this.state.city)

}

    render() {
        return (
            <div className='container'>
                <div className='card-header'>
                    <div className='card-body'>
                        <h2>data</h2>
                        <input mt-3
                        onChange={(event)=>{this.setState({
                            name: event.target.value
                        })}}
                        type="text" placeholder = "enter text" ></input>
                        <input 
                        onChange={(event)=>{this.setState({
                            city: event.target.value
                        })}}
                        type="password" placeholder = "enter password">
                        
                        </input>

                        <div className='card-footer'>
                            <button 
                            onClick= {this.sendData}
                            className='bg-warning'>Click Me</button>
                            <button 
                            onClick= {this.sendDataPassword}
                            className='bg-warning'>Click Password</button>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default RedComponent