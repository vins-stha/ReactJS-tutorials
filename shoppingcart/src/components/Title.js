
import React,{Component} from 'react'
import Product from './Product'

export default function Title({name,title}){

        return(
            <div>
                <h3>
                    <div  className="col-10 mx-auto text-center">product</div>
                    <div className={"row"}>
                        <h1 className={"text-capitalize font-weight-bold align-center"}>{name}
                            <strong className={"text-blue"}>   {title}</strong>
                        </h1>

                    </div>

                </h3>
            </div>
        )


}