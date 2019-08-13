
import React,{Component} from 'react'
import productsInStore from './ProductList'
import {storeProducts} from "../data";

export const ProductContext = React.createContext();
//export const MyContext = React.createContext();

 class ProductProvider extends React.Component{
     constructor(){
         super()
         this.state = {
            products:storeProducts,
            available : "ytes",
            name:"noName",
            drink :"Coca-Cola",
            type: "soft",
           // price : 1.5
        }
        this.clickHandler = this.clickHandler.bind(this)
       // this.handleChange = this.handleChange.bind(this)
     }
    
    handleDetail(e) {
        console.log("hello from detail handler")
       // alert()
    }
    
    addToCart(){
        console.log("hello from addToCart")
    }
    clickHandler(e){
        this.setState({
            price: this.state.price +1,
            drink:"Fanta",
            type: "Orange"
        })

    }
   
    render(){
         const providerData ={
           value: this.state,
           handleDetail:this.handleDetail(),
            addToCart : this.addToCart(),
            clickHandler:this.clickHandler

        }
        return(
            <div>
                <ProductContext.Provider value = {providerData}>
                    {this.props.children}

                </ProductContext.Provider>

            </div>
        )

    }


}
const ProductConsumer = ProductContext.Consumer

export {ProductConsumer,ProductProvider}