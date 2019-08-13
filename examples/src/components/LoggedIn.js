import React from "react"

class LoggedIn extends React.Component{
    constructor(){
        super()
        this.state = {
        isLoggedIn : true,
        show : true
        }
        this.handleClick = this.handleClick.bind(this)
        this.showHide = this.showHide.bind(this)
    }
    handleClick(){

        this.setState(
            prevState=>{
                return{
                    isLoggedIn : !prevState.isLoggedIn
                }
            }
        )
    }

    showHide(){
    this.setState(prevState=>{
        return {
            show : !prevState.show
        }
    })



    }
    render(){
        let buttonText = this.state.isLoggedIn ? 'Log Out' : 'Log in'
        let showHideText = this.state.show ? 'Hide' : 'Show'
        return(
        <div>
            {
                this.state.show ?  <div id = "hello">Well hello logged in or not lets check out!</div> : null
            }

            <button onClick = {this.handleClick}> {buttonText}</button>
            <div> <button onClick = {this.showHide}>{showHideText}</button></div>

        </div>

    )

    }

}
export default LoggedIn