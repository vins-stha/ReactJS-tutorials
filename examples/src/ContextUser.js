import React, {Component} from 'react'
import ContextGuest from './ContextGuest'

export default class ContextUser extends Component{
  /*  state = {
        newDrink : this.props.value.drink,
        newType : this.props.value.type

    }*/

    render(){
        return(
            <div>
            <h1> This is inside USER</h1>
            <h2> Drink type : {this.props.value.type}</h2>
        <hr/><hr/>
            <ContextGuest value={this.props.value.type}/>
            </div>
        )
    }

}

