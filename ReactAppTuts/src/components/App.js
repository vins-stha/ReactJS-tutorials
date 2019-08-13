import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Body from "./Body"
import todoData from './todoData'
import ToDoList from "./ToDoList"

class App extends React.Component{
    constructor(){
    super()
    this.state={
        todos : todoData
    }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState((prevState)=>{
            const newTodos = prevState.todos.map(cvalue=>{
                if(cvalue.id===id){
                    cvalue.status =!cvalue.status
                }
               return cvalue
            })
            return{
            todos: newTodos
            }
        })

  }
    render(){
    const todoItemComp = this.state.todos.map(i=><ToDoList key={i.id} item={i} title={i.text} status={i.complete} handler = {this.handleChange} />)
        return(
        <div>
            <Navbar/>
            <Body/>
            {todoItemComp}

            <Footer/>
        </div>
        )
    }
}
export default App