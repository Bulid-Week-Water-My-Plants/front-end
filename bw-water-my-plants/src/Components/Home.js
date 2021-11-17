import React from "react";
import Plant from "./Plant";


const Home = (props) => {
    const {plant} = props
    return (
        <div>
           <h1>Welcome to Water My Plants!</h1>
            <h2>This is the home page</h2>
            <h2> Home Page should show plant that needs water soon, and then a collapsed list of plant cards</h2>
            <h2>Plants will show up under here as they are added</h2>
            {plant.map( plants=> {
                return (
                    <Plant key={Math.random()} details={plants} />
                )})
            }
        </div>
        
    )
}

export default Home;