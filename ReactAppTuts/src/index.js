import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import MyForm from './components/App';
import * as serviceWorker from './serviceWorker';
import App from "./components/App"
import ToDoList from "./components/ToDoList"
import './style.css'
import './index.css';
import ClickEventApp from './components/ClickEventApp'


class ClassApp extends React.Component{
    constructor(){
    super()
    this.state = {
        name : 'Da Vins',
        isLoggedIn: true
    }
    var logged = "INNNNNNNN"
    if (this.state.isLoggedIn){
       this.state.logged =logged

        }else {
            this.state.logged ="OUTT"
        }
    }
    render(){
     return(
        <div>

            <h1>Hello
                <Header username ="Da'Vins"/></h1><h4>from classic app {this.state.name} you are {this.state.logged}</h4>
            <Greeting/>

         </div>
        )
    }

}

class Header extends React.Component{
    render(){
    return(
        <header>
            <p> {this.props.username}</p>
        </header>
    )
    }

}

class  Greeting extends React.Component{

    render(){
         const date = new Date()
    //const hours = date.getHours()
    var hours =12
    let timeOfDay
    if(hours<12) {
            timeOfDay = "Morning"
        }else if(hours>=12&& hours<=18){
            timeOfDay="Afternoon"
        }else{
            timeOfDay="Evening"
        }

        return(
        <h4>
            <p> Good {timeOfDay} time : {hours}</p>
        </h4>
    )
    }

}



//ReactDOM.render(<ClassApp/>, document.getElementById('newRoot'));
ReactDOM.render(<ClickEventApp/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//export default newGreeting
