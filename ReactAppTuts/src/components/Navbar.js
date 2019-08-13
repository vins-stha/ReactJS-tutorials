import React from "react"

function Navbar(){

const date = new Date()
const time = date.getTime()
const styles = {
    fontSize: 13
    }
var h = date.getHours()
var m = date.getMinutes()
var s=date.getSeconds()
let day
if(h<12){
    day = 'Morning'
    styles.color = '#112233'
    }else if(h>12 && h<17){
        day ='Afternoon'
        styles.color = 'blue'
    }else{
        day ='Evening'
        styles.color ='Yellow'
        styles.backgroundColor="black"
        }


    return(
        <nav>
            <h2 style={styles}>Good {day}</h2>
            <div class="nav">
                <div class="nav-header">
                    <div class="nav-title">
                          Innside
                    </div>
                 </div>
                 <div class="nav-btn">
                     <label for="nav-check">
                            <span></span>
                            <span></span>
                            <span></span>
                      </label>
                    </div>

                 <div class="nav-links">
                    <a href="#">Home |</a>
                    <a href="#">About Us |</a>
                    <a href="#">Contact |</a>
                    <a href="#" target="_blank">Github |</a>
                    <a href="#" target="_blank">Stackoverflow |</a>
                    <a href="#" target="_blank">LinkedIn |</a>
                    <a href="#" target="_blank">Codepen |</a>
                    <a href="#" target="_blank">JsFiddle </a>
                    <a href="#"></a>
                 </div>
            </div>
        </nav>
    )
}
export default Navbar