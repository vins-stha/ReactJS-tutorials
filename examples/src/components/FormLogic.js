import React,{Component} from "react"
import FormUIContainer from './FormUIContainer'

class FormLogic extends React.Component{
    constructor(){
        super()
        this.state ={
            FirstName: "",
            LastName : "",
            Age : "",
            gender : "",
            nationality:"",
            isVegan: false,
            isVegeteranian :false,
            isLactosIntolerance:false,
      }
      this.handleChange = this.handleChange.bind(this)
     // this.handleSubmit = this.handleSubmit.bind(this)
    } //end of constructor


//    }
    handleChange(event){
            const {name,value,checked,type} = event.target
            // type ==="checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value })
            type === "checkbox" ? this.setState({[name] : checked}):this.setState({[name] : value // update value entered in textbox every time a value is entered in text box to textBoxValue

        })
    }

    render(){
        return(
        <FormUIContainer
        data={this.state}
        handleChange = {this.handleChange}
        />

        )
    }//end render

}//end of class


export default FormLogic