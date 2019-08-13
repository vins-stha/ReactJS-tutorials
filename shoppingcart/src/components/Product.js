import React,{Component} from 'react'
import {ProductConsumer} from "./context";
import {ProductContext} from "./context"
import styled from 'styled-components'
import {Link} from "react-router-dom"
import storeProducts from "../data"

export default class Product extends Component{
    constructor(props){
        super(props)
        this.state={
            products:storeProducts
        }
    }
     product = storeProducts.map(
         (p)=>
         <Product product={p} key={p.id}
         />
          
    )
    
    render(){
     console.log("price = ",this.props.product.price,"<br/>name : ", this.props.product.name)
     return(
         <div id="wrapper" className="col-9 mx-auto col-md-6 col-lg-3 my-3" style={{ border:'1px solid black'}}>
             <div className="card">
                 <div 
                    className="img-container p-5" onClick={()=>console.log("clickclikc")}>
                     <Link to=""></Link>
                    <img src="" alt="product" className="card-img-top" style={{border:'1px solid red'}}/>
                     <button 
                        className="cart-btn" 
                        //disabled={this.props.inCart ? true:false}
                        onClick={()=>
                                console.log("Added to cart next change state of button")
                        }
                        >Add to cart</button>

                     <h3>price : {this.props.product.price}
                        <br/>name : {this.props.product.name}<br/>
                     </h3>

                 </div>
             </div>
             <h3>hello  </h3>
             
         </div>
     
     )
       
      
    
    }

}