import React from "react"

function Product(props){
    return(
        <table>
            <tr>
                <td> {props.name}</td>
                <td/>
                <td> {props.price}</td>
                <td/>
                <td> {props.description}</td>
            </tr>
        </table>
    )
}
export default Product