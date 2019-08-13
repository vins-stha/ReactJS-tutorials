import React, {Component} from "react"

class ConditionalRendering extends React.Component{
    constructor(props){
       super(props)
       }
    render(){
        return(
        <div>
             {this.props.isLoading ? <div><h1>Loading...</h1></div> : <div><h1>{this.props.message} Finally Loaded successfully! :(</h1></div>}
         </div>
        )

     /*if(this.props.isLoading === true){

        return(
        <div>
            <h3>Hello from conditional functioon of conditional rendering js
            <br/>&nbsp;&nbsp;&nbsp;   message = {this.props.message}
            <br/> &nbsp;&nbsp;&nbsp;  loading = { this.props.isLoading }
            </h3>
        </div>

    )

     }else{

        return(
        <div>
            <h3>Hello from conditional functioon of conditional rendering js
            <br/>&nbsp;&nbsp;&nbsp;   FALSE FALSE

            </h3>
        </div>

    )
     }*/

    }

}
export default ConditionalRendering