import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Nav extends Component {
    render() {
        return (
            <div>
                <div className="container-flex m-0 p-0">
                    <div className="row">
                        <div className="col">
                            <nav className='navbar navbar-dark bg-primary'>
                                <a href="" className='navbar-brand '>Welcome</a>
                                <ul className='nav '>
                                    <li className='nav-item'><Link className =" nav-link text-white" to="/Parent" >Parent</Link></li>
                                    <li className='nav-item'><Link className =" nav-link text-white" to="/State" >State</Link></li>
                                    <li className='nav-item'><Link className =" nav-link text-white" to="/Ajax" >Ajax</Link></li>
                                    <li className='nav-item'><Link className =" nav-link text-white" to="/Redux" >Redux</Link></li>
                                    
                                </ul>


                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav

