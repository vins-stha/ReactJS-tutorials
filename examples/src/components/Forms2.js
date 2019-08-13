import React,{Component} from "react"

class ContactForm extends React.Component{

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
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
    const {name,value,checked,type} = event.target
   // type ==="checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value })
 type === "checkbox" ? this.setState({[name] : checked}):this.setState({[name] : value // update value entered in textbox every time a value is entered in text box to textBoxValue

        })
    }
    handleSubmit(){
        alert()
    }

    render(){
        return(
            <div><hr/>
                <form onSubmit = {this.handleSubmit}>
                   <p>Given Name :
                       <input
                        type="text"
                        value={this.state.FirstName}
                        name="FirstName"
                        placeholder="First Name"
                        onChange ={this.handleChange}
                         />
                     </p>

                    <p> Family Name :
                    <input
                        type="text"
                        value={this.state.LastName}
                       name="LastName"
                       placeholder="Last Name"
                        onChange ={this.handleChange}
                    />
                    </p>
                     <p>Age :
                     <input
                        type="text"
                       name="Age"
                       placeholder ="Age"
                        value={this.state.Age}
                        onChange ={this.handleChange}
                    /></p>

                    <label name ="gender"> Gender :
                         Male <input
                            type="radio"
                            checked= {this.state.gender === "male"}
                            name= "gender"
                            value ="male"
                            onChange ={this.handleChange}

                        />
                       Female <input
                            type="radio"
                            checked= {this.state.gender === "female"}
                            name= "gender"
                            value="female"
                            onChange ={this.handleChange}

                        />
                        Others <input
                            type="radio"
                            checked= {this.state.gender === "others"}
                            name= "gender"
                            value="others"
                            onChange ={this.handleChange}
                        />
                    </label>
                    <p>
                    <label>Nationality :
                        <select name ="nationality" value={this.state.nationality} onChange= {this.handleChange} >
                            <option value="Germany">Germany</option>
                            <option value="Norway">Norway</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Finland">Finland</option>
                            <option value="Others">Others</option>
                        </select>

                    </label>
                    </p><label><h3>Food Selection</h3></label>
                    <p><h4>
                        <input type="checkbox" name="isVegan" checked={this.state.isVegan}  onChange={this.handleChange}/> Vegan</h4>
                    </p>
                       <p><h4>
                        <input type="checkbox" name="isVegeteranian" checked={this.state.isVegeteranian} onChange={this.handleChange}/> Vegeteranian</h4>
                    </p>
                       <p><h4>
                        <input type="checkbox" name="isLactosIntolerance" checked={this.state.isLactosIntolerance} onChange={this.handleChange}/>LactosIntolerance</h4>
                       </p>

                    <button>Submit</button>
                </form>
                <hr/>
                <h1>Entered information : <br/></h1>
                <p> Name : <bold>{this.state.LastName}</bold>,{this.state.FirstName}</p>
                <p> Age : {this.state.Age}</p>
                <p> Gender : {this.state.gender}</p>
                <p> Nationality : {this.state.nationality}</p>
                <p> <h4>Food Selection :</h4>
                    <ul>
                    <li> Lactos Intolerance : {this.state.isLactosIntolerance ? "Yes" : "No"}</li>
                    <li> Vegan : {this.state.isVegan ? "Yes" : "No"}</li>
                    <li> Vegeteranian : {this.state.isVegeteranian ? "Yes" : "No"}</li>
                    </ul>


                </p>

            </div>
        )
    }
}
export default ContactForm