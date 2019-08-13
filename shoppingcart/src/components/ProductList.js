import React,{Component} from 'react'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'
import {ProductContext} from "./context";


export default class ProductList extends Component{
    constructor(){
        super()
        this.state={
            products : storeProducts
        }

    }

    render(){
       //console.log("FOR NOW ",this.state.products)
        return(
        <div>

                <div  className="col-10 mx-auto text-center">product</div>
                <Title name={"Product List"} title={""}/>
                {/* <ProductContext.Consumer>
                    {
                        (data) =>{ 
                               return data.value.products.map( // "products:productsInstore" is inside "value:this.state"
                                (product) =>{
                                    return 
                                    (<Product 
                                    key={product.id} 
                                    product={product}
                                    />)
                                }
                            )
                        }
                    
                    }



                </ProductContext.Consumer> */
                <ProductContext.Consumer>
                {data => {
                  return data.value.products.map
                  (
                      product => 
                    {
                      return <Product key={product.id} product={product} name={product.name} price={product.price}/>
                    }
                  )
                }}
              </ProductContext.Consumer>
                }
               
            </div>
        )
    }

}