import React from "react"
import todoData from './todoData'

function ToDoList(props){
   let test =  props.item.status ? <h1></h1> : <h2> </h2>
   const condtionalStyle = {
    color: "green",
    fontStyle:"italics",
    textDecoration:"line-through"
   }
     const noStyle = {
    color: "red",
    fontStyle:"bold",
    textDecoration:"underline"
   }
    return(
        <div>

               <p style={props.item.status ? condtionalStyle:noStyle }>  <li><input type="checkbox"
                    checked={props.item.status}
                    onChange ={()=>props.handler(props.item.id)}
                    />

                    title :{props.item.text}
                    {test}


                 </li>
</p>
        </div>

    )
}
export default ToDoList