import React from "react"
import FormLogic from './FormLogic'

function FormUIContainer(props){
            return(
                <div><hr/>
                    <form>
                       <p>Given Name :
                           <input
                            type="text"
                            value={props.data.FirstName}
                            name="FirstName"
                            placeholder="First Name"
                            onChange ={props.handleChange}
                             />
                         </p>

                        <p> Family Name :
                        <input
                            type="text"
                            value={props.data.LastName}
                           name="LastName"
                           placeholder="Last Name"
                            onChange ={props.handleChange}
                        />
                        </p>
                         <p>Age :
                         <input
                            type="text"
                           name="Age"
                           placeholder ="Age"
                            value={props.data.Age}
                            onChange ={props.handleChange}
                        /></p>

                        <label name ="gender"> Gender :
                             Male <input
                                type="radio"
                                checked= {props.data.gender === "male"}
                                name= "gender"
                                value ="male"
                                onChange ={props.handleChange}

                            />
                           Female <input
                                type="radio"
                                checked= {props.data.gender === "female"}
                                name= "gender"
                                value="female"
                                onChange ={props.handleChange}

                            />
                            Others <input
                                type="radio"
                                checked= {props.data.gender === "others"}
                                name= "gender"
                                value="others"
                                onChange ={props.handleChange}
                            />
                        </label>
                        <p>
                        <label>Nationality :
                            <select name ="nationality" value={props.data.nationality} onChange= {props.handleChange} >
                                <option value="Germany">Germany</option>
                                <option value="Norway">Norway</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Finland">Finland</option>
                                <option value="Others">Others</option>
                            </select>

                        </label>
                        </p><label><h3>Food Selection</h3></label>
                        <p><h4>
                            <input type="checkbox" name="isVegan" checked={props.data.isVegan}  onChange={props.handleChange}/> Vegan</h4>
                        </p>
                           <p><h4>
                            <input type="checkbox" name="isVegeteranian" checked={props.data.isVegeteranian} onChange={props.handleChange}/> Vegeteranian</h4>
                        </p>
                           <p><h4>
                            <input type="checkbox" name="isLactosIntolerance" checked={props.data.isLactosIntolerance} onChange={props.handleChange}/>LactosIntolerance</h4>
                           </p>

                        <button>Submit</button>
                    </form>
                    <hr/>
                    <h1>Entered information : <br/></h1>
                    <p> Name : <bold>{props.data.LastName}</bold>,{props.data.FirstName}</p>
                    <p> Age : {props.data.Age}</p>
                    <p> Gender : {props.data.gender}</p>
                    <p> Nationality : {props.data.nationality}</p>
                    <p> <h4>Food Selection :</h4>
                        <ul>
                        <li> Lactos Intolerance : {props.data.isLactosIntolerance ? "Yes" : "No"}</li>
                        <li> Vegan : {props.data.isVegan ? "Yes" : "No"}</li>
                        <li> Vegeteranian : {props.data.isVegeteranian ? "Yes" : "No"}</li>
                        </ul>


                    </p>

                </div>



            )//Conatins ui form
    //}

}

export default FormUIContainer