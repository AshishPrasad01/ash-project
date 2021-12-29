import React, { Component } from 'react'
import axios from 'axios'

class Ajax extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userData: []
        }
    }

    getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log(res.data)
            this.setState({
                userData: res.data
            })

        }, (error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div className='container '>
                <div className='row'>
                    <div className='col'>
                        <div className='card-header  bg-primary mt-3 text-white'><h2>Student Details</h2>
                            <div className='card-body bg-warning mt-5'>
                                <div >
                                    { this.state.userData.length>0 ?
                                    <table className='table table-hover'>
                                        <thead>
                                            <tr>
                                                <td>ID:</td>
                                                <td>Name:</td>
                                                <td>Email:</td>
                                                <td>Username:</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.userData.map((ele, index) => {
                                                    return <tr key = {index+1}>
                                                        <td>{ele.id}</td>
                                                        <td>{ele.name}</td>
                                                        <td>{ele.email}</td>
                                                        <td> {ele.username}:</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
    : <div>  no data </div>}
                                </div>
                                <div className='card-footer mt-3'>
                                    <button
                                        onClick={this.getData}
                                        className='bg-dark text-white text-hover '>Send Data</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Ajax