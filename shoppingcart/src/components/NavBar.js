import React,{Component} from 'react'
import {Link} from "react-router-dom"
import logo from "../logo.svg"
//import lgo2 from"././images/apple"
import {CartButton,Navbar} from './styledItems'
import styled from "styled-components";


export default class NavBar extends Component{
    render(){
        return(
        <div>
            <Navbar  className={"navbar navbar-inverse"}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                           <img src={logo} alt={"logo"}/>
                           Shopping Cart
                        </Link>
                    </div>

                    <ul className="nav navbar-nav">
                        <li className={"active"}>Home</li>
                        <li  className="d-inline bg-white" ><Link to={"/"}>Product List</Link></li>
                        <li  className="d-inline bg-white" ><Link to={"Detail"}>Detail</Link></li>

                    </ul>

                    <p>
                        <Link to={"cart"}>
                            <span className="glyphicon glyphicon-shopping-cart">
                                <CartButton>my carts</CartButton>
                            </span>

                        </Link>

                    </p>
                </div>

            </Navbar>

        </div>
        )
    }

}



