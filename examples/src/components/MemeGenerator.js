import React,{Component} from "react"


class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText : "",
            bottomText : "",
            imgRandom :"https://i.imgflip.com/26am.jpg",
            isLoading: false,
            allMemes :[],
            randomNum:""

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })

      }


      componentDidMount(){
        this.setState({isLoading:true})
        const url ="https://api.imgflip.com/get_memes"
        const proxyurl="https://cors-anywhere.herokuapp.com/"

        fetch(proxyurl + url)
            .then(response =>response.json())
            .then(response =>{
                const {memes} = response.data
               // console.log("first meme is ", memes[0], " number of memes = " , memes.length)
                this.setState({
                    allMemes : memes

                })

                })

    }
       handleSubmit(event){

        event.preventDefault()
        const rand = Math.floor(Math.random()* this.state.allMemes.length)
        console.log("random meme is ", this.state.allMemes[rand])
       // alert (rand)
        this.setState({
            imgRandom: this.state.allMemes[rand].url,
            randomNum: rand
        })
       }


    render(){
        return(
        <div>
             <header><h2>Meme Generator</h2>
                <img src=""/>
            </header>
            <form class="meme-form" onSubmit = {this.handleSubmit}>
                <input
                    type="text"
                    name="topText"
                    value={this.state.topText}
                    onChange={this.handleChange}
                    placeholder ="Top Text"
                />
                <input
                    type="text"
                    name="bottomText"
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                    placeholder  = "Bottom Text"
                />
                <div className="meme">
                     <img src={this.state.imgRandom} class="img-fluid"/>
                    <h2 className="top">{this.state.topText}</h2>

                     <h2 className="bottom">{this.state.bottomText}</h2><br/>


                     <h2> Title >>>  {this.state.randomNum}</h2><br/>
                     <h2> name __>>{this.state.allMemes.name}</h2><br/><br/>
                    <button>Generate</button>
                </div>
            </form>
        </div>
        )
    }
}

export default MemeGenerator