import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import logoImg from '../images/gallery/thumbs/03.jpg';

const NavDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    margin: 0;
    background-image: linear-gradient(to bottom right, #3cb371, #5db33c);
    height: 7vh;
    width: 100%;

    h2 {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 0;
      }
`;

const LogoDiv = styled.span`
    width: 4%;
    background: red;
    background-image: url(${logoImg});
    background-position: center;
    background-size: cover;
    height: 100%;
    font-size: 2rem;
    border-radius: 50%;
    border: 2px solid #3c7db3;
`;

const LinksDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 60%;
    width: 50%;
    margin-left: 40%;
`;

const GreetingSpan = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 40%;
    max-width: 40%;
    margin-left: 55%;

    h2{
        margin-right: 1.3%;
        font-size: 2rem;
        color: whitesmoke;
        text-shadow: 2px 2px 5px #3c7db3;
    }
`;

const LinkButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    min-width: 30%;
    color: whitesmoke;
    text-shadow: 2px 2px 5px #3c7db3;
    font-size: 2rem;
    height: 80%;
    text-decoration: none;
    padding: 2% 1%;

    &:hover{
        background-image: linear-gradient(to bottom right, #3cb372, rgba(60,125,179,.3));
    }

`;

const AccountButtons = styled(LinkButton)`
    height:40%;
    min-width: 0%;
    max-width: 30%;
    font-size: 1.5rem;
    padding: 2% .5%;
    margin-right: 1.3%;
`;

const NavBar = (props) =>{

    return (
        <NavDiv>
            <LogoDiv></LogoDiv>
            {
                props.user.name ? 
                    <GreetingSpan>
                        <h2>Hello {props.user.name}!</h2>
                        <AccountButtons to='/' onClick={props.logout}>Logout</AccountButtons>
                    </GreetingSpan> 
                    :
                    <GreetingSpan>
                        <h2>Hello Guest!</h2>
                        <AccountButtons to='/login'>Login</AccountButtons>
                        <AccountButtons to='/signup'>Sign Up</AccountButtons>
                    </GreetingSpan>
            }

            <LinksDiv>
                <LinkButton to='/'>Home</LinkButton>
                <LinkButton to='/addplant'>Add a Plant</LinkButton>
                <LinkButton to='/myplants'>My Plants</LinkButton> 
               
            </LinksDiv>
            
        </NavDiv>
    )

}

export default NavBar;