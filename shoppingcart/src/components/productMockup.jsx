import React,{Component} from 'react'
import {ProductConsumer} from "./context";
import {ProductContext} from "./context"

export default class Product extends Component{
    constructor(props){
        super(props)
    }
    render(){
       // const {id,title,price} = this.props.product;
        return(
          
            <ProductContext.Consumer>
                     
                {
                    (data)=>(
                        <div><h3>Product ID is = {data.value.price}
                        <br/>type:{data.value.type}
                        <br/> available:{data.available} </h3>
                        <button onClick={data.clickHandler}> make changes Change</button>
                        </div>
                    )               }
            </ProductContext.Consumer>
    )
    }

}