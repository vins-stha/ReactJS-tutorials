import React, {Component} from "react"
import Product from "./Product"
import itemData from './ProductList'
import ConditionalRendering from './ConditionalRendering'
import LoggedIn from './LoggedIn'
import FetchAPI from './FetchAPI'
import Forms from './Forms'
import ContactForm from './Forms2'
import FormLogic from './FormLogic'
import MemeGenerator from './MemeGenerator'
import ContextUser from '../ContextUser'


class NewApp extends React.Component{
    constructor(){
        super()
        let name = "none"
        this.state = {
        isLoading: true,
        nowMessage: 'hello now'
    }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        },4000)

    }
    render(){
//        console.log("hello from new app", this.state.nowMessage);
             return(
             <div>
                 <ContextUser/>
            <ConditionalRendering text="we got ttis" isLoading={this.state.isLoading} message={this.state.nowMessage} />
            <LoggedIn/>
            <FetchAPI/>
            <Forms/>
            <p><h2>Simple Contact form with component/container in as single unit </h2>
                <ContactForm/>
            </p>
            <p><h2> Form in Component / Container approach in different units</h2>
                <FormLogic/>
            </p>
            <p><MemeGenerator/></p>
            </div>
        )
    }
}


export default NewApp