import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import ContactCard from './ContactCard'
//import NewApp from  './NewApp'
import ContextUser from './ContextUser'


export const MyContext = React.createContext();

export default class App extends Component {
    state = {
        drink :"Coca-Cola",
        type: "soft",
        price : 1.5

    }
    clickHandler(e){
        this.setState({
            price: this.state.price +1,
            drink:"Fanta",
            type: "Orange"
        })

    }
    handleClickContext =()=>{

        this.setState({
           type: this.state.type ===("soft") ? "Coca-Cola" : "hard",
            price: this.state.price +10,
            drink:"Rum"
       })

}
    render(){
        const contextData = {
            data: this.state,
            handleClickContext: this.handleClickContext//{this.clickHandler, this.handleClickContext}
        }

        return (
            <MyContext.Provider value = {contextData}>
            <div>
            <ContextUser value={this.state}/>
            </div>
            </MyContext.Provider>






    );

    }

}

//export default App;
