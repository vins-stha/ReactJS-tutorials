import React, {Component} from 'react'
import ContextUser from './ContextUser'
import {MyContext} from './App'
import { ProductContext } from '../../shoppingcart/src/components/context';

export default class ContextGuest extends Component{

    render(){
        return(
        <div>
            <ProductContext.Consumer>
                {
                    ({data,handleClickContext}) =>(
                        <div>
                            <h4> we have here in Guest component</h4>
                            <h3>drink : {data.drink} <br/>
                                type: {data.type}<br/>
                                price : {data.price}
                            </h3>
                            <button onClick={handleClickContext}> make changes Change</button>
                        </div>
                    )
                }
            </ProductContext.Consumer>

        </div>




    )
    }

}

