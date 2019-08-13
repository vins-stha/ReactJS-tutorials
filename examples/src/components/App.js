import React from "react"
import ContactCard from './ContactCard'
import countries from './CountryData'
//import Joke from './Joke'
import Conditional from './ConditionalRendering'

function App(){

    const friends = [
    {id:1, name: 'Dave',age:50,countryName:"UK", area:"1234567", imgUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/102px-Flag_of_Nepal.svg.png"},
    {id:2,name: 'Kellie',age:42,countryName:"USA", area:"65432",imgUrl:""},
    {id:3,name: 'Max',age:12,countryName:"USSR",area:"9890878",imgUrl:""},
    {id:2,name: 'Jack',age:12,countryName:"China",area:"545633",imgUrl:""}
];

const friend = friends.map(p=><ContactCard key={p.countryName} area={p.area} countryName={p.countryName}  imgUrl={p.imgUrl}/>)

const country = countries.map(c=>
    <ContactCard
         key={c.countryName}
         area={c.area}
         imgUrl={c.imgUrl}
         countryName={c.countryName}
    />)

        return(

    <div className="App">
        <Conditional item = "Guten Dag"/>
        {friend}
        <hr/><hr/><hr/><hr/>
        {country}
        <hr/>
        <ContactCard
            imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/102px-Flag_of_Nepal.svg.png"
            countryName ="Nepal"
            area ="147,181"

        />
        <ContactCard
            imgUrl ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/125px-Flag_of_Bangladesh.svg.png"
            countryName="Bangladesh"
            area="147,570"
        />
        <ContactCard
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/125px-Flag_of_Finland.svg.png"
            countryName="Finland"
            area="338,424"
        />
         <ContactCard

            countryName="Germany"
            area="357,386 km2"
        />




    </div>
    )
}
export default App