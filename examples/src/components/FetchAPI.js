import React from "react"

class FetchAPI extends React.Component{
    constructor(){
    super()
        this.state ={
            isLoading : false,
            character : {}
        }
    }
    componentDidMount(){

    this.setState({isLoading : true})
    const url = "https://swapi.co/api/people/14"
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = "api.openweathermap.org/data/2.5/weather?id=2172797"
       // console(" test test ")
      //fetch(proxyurl + "https://swapi.co/people/1",{mode:'no-cors'})
     fetch(proxyurl + url)

      //fetch("api.openweathermap.org/data/2.5/weather?q=London")
       //fetch("api.openweathermap.org/data/2.5/weather?id=2172797")
        .then(response => response.json())
      //  .then(data => { this.setState({ character : data})} )
         .then(data=> {
            this.setState({

            character : data,
            isLoading : false
            })

         console.log(' new data is ', this.state.character)})
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


    }

    render(){
        const text = this.state.isLoading ? " Please wait...we are fetching data from the api " : this.state.character.name
        console.log("console says "+ text)
        return(
        <div>
            well hello we are now about to fetch data from API {text}
        </div>
        )
    }
}
export default FetchAPI