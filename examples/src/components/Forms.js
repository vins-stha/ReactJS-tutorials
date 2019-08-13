import React, {Component} from "react"

class Forms extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName :"",
            isChecked : false,
            gender : "",
            nationality:""

        }
       this.handleChange = this.handleChange.bind(this)
       this.handleChange2 = this.handleChange2.bind(this)
    }
    handleChange(event){

        const { name,value, type,checked } = event.target
        type === "checkbox" ? this.setState({[name] : checked}):this.setState({[name] : value // update value entered in textbox every time a value is entered in text box to textBoxValue

        })

    }
    handleChange2(event){
    this.setState({
        isChecked : !this.state.isChecked
    })
    }

    render(){
        return(
        <div>
            <form>
                    <input name ="firstName" type="text" placeholder="First name" onChange = {this.handleChange}></input>
                    <input name = "lastName" type="text" placeholder="Last name" onChange = {this.handleChange}></input>
                    <h2>{ this.state.firstName}{this.state.lastName}</h2>
                <label name="text area"><h4> TEXT AREA</h4> <br/>
                  //  <textarea></textarea>
                 <label name="check box"><h4> check box</h4> <br/>
                     <input
                        type="checkbox"
                        checked = {this.state.isChecked}
                        name="isChecked" //very important! to be same as inside the constructor
                        onChange={this.handleChange}>
                      </input>  </label> Check box checked ?? or not ?

                </label>
                 <label name="radio button"><h4> Radio button</h4> <br/>
                    <input
                        type = "radio"
                        name = "gender"
                        value = "male"
                        checked = {this.state.gender == "male"}
                        onChange ={this.handleChange}
                    />male
                    <input
                        type = "radio"
                        name = "gender"
                        value = "female"
                        checked = {this.state.gender== "female" }
                        onChange ={this.handleChange}
                    />Female
                    <input
                        type = "radio"
                        name = "gender"
                        value = "other"
                        checked = {this.state.gender == "other"}
                        onChange ={this.handleChange}
                    />Other
                <h2>hello {this.state.gender}</h2>
                </label>
                Nationality :
                <select
                    name="nationality"
                    value={this.state.nationality}
                    onChange={this.handleChange}
                >
                    <option value="Finland">Finland</option>
                    <option value="EU">EU</option>
                    <option value="Non-EU">Non-EU</option>

                </select><br/>
                Nationality selected : >>> {this.state.nationality}
            </form>

        </div>
        )
    }

}
export default Forms
