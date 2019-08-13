import React from "react"


class ClickEventApp extends React.Component{
    constructor(){
    super()
    this.state = {
        count : 0
    }
    this.clicked = this.clicked.bind(this)
    this.halved = this.halved.bind(this)
    this.doubled = this.doubled.bind(this)
    this.tripled =this.tripled.bind(this)
    }
     clicked(){
        this.setState(puranoState=>{return{count: puranoState.count+1}})
    }
    halved(){
     this.setState(puranoState=>{return{count: puranoState.count*0.5}})
     }
    doubled(){
    this.setState(puranoState=>{return{count: puranoState.count*2}})
    }
    tripled(){
    this.setState(puranoState=>{return{count:puranoState.count*3}})
    }
    render(){
    return(
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png"/>
            <br/>
            <br/>
            <h1>count : {this.state.count}</h1>
            <button onClick={this.clicked}><h3>CLick </h3></button>
            <button onClick={this.halved}><h3>Halved </h3></button>
            <button onClick={this.doubled}><h3>Doubled </h3></button>
            <button onClick={this.tripled}><h3>Tripled </h3></button>
            <h1>count : {this.state.count}</h1>
        </div>

    )
    }

}
export default ClickEventApp
