import React from "react";
import Plant from "./Plant";
import styled from "styled-components";
import tempImg from '../images/gallery/thumbs/01.jpg'; // TO BE REPLACED WITH SCREENSHOT OF PLANT CARDS
import { Link } from "react-router-dom";

const GuestDiv = styled.div`
    height: 93vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-image: linear-gradient(to bottom, rgba(256,256,256,0), #3cb372);
    margin: 0;

    h1{
        font-size: 6rem;
        width: 40%;
        margin: 0;
    }

    div{
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        height: 80%;
        padding: 2% 0;
    }

    p{
        font-size: 2.8rem;
        width: 30%;
        line-height: 1.5;
    }

    .img{
        background-image: url(${tempImg});
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 40%;

    }
`;

const LinkButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #339a61;
    max-width: 10%;
    color: whitesmoke;
    text-shadow: 2px 2px 5px #3c7db3;
    border-radius: 15px;
    font-size: 2rem;
    height: 15%;
    text-decoration: none;
    padding: 1% 1.7%;

    &:hover{
        background-image: linear-gradient(to bottom right, #3cb372, rgba(60,125,179,.3));
    }

`;

const UserDiv = styled.div`
    background-image: linear-gradient(to bottom, rgba(256,256,256,0), #3cb372);
    height: 93vh;
`;

const Home = (props) => {
    const {plant, user} = props
    return (
        <div>
            { !props.user.email ?
            <GuestDiv>
                <h1>Never Forget to Water Your Plants!</h1>
                <div>
                    <p>Sometimes life gets too busy and we start to neglect our lovely plants. By adding your plant information here, you can easily keep track of your plants and when you last watered them. Signing up is easy and fast, so start adding your plants today and never forget to water them again!</p>
                    <LinkButton to='/signup'>Sign Up</LinkButton>
                    <span className='img'></span>
                </div>
            </GuestDiv>
            :
            <UserDiv>
                <h2>My Plants</h2>
                {plant.map( plants=> {
                    return (
                        <Plant key={Math.random()} details={plants} />
                    )})
            }
            </UserDiv>
            
            }
        </div>
        
    )
}

export default Home;