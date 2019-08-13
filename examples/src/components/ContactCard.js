import React from "react"

function ContactCard(props){
    console.log(" we found these : "+props)
    return(
    <div className ="contact-card">
        <img style ={{ border:'1px solid black'}}src={props.imgUrl}/>
        <h3 style={{color:!props.imgUrl && "brown"}}> Country Name : {props.countryName} </h3>
        <p>Area : {props.area} km sq. </p>

        <hr/>
    </div>
    )
}
export default ContactCard