import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    margin: 0;
    background: #3CB371;
    height: 10vh;
    width: 100%;

    h2 {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 0;
      }
`;

const LinkButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
    border: 2px solid black;
    min-width: 30%;
    background: whitesmoke;
    color: black;
    font-size: 2rem;
    height: 80%;
    text-decoration: none;
    padding: 2% 1%;

`;

const LinksDiv = styled.div`
    display: flex;
    align-items: flex-end;
    height: 60%;
    width: 50%;
    background: green; //Temp color for testing REMOVE
`;

const LogoDiv = styled.span`
    width: 15%;
    background: red;
    height: 100%;
`;

const GreetingSpan = styled.span`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 40%;
    max-width: 40%;
    margin-left: 25%;

    h2{
        margin-right: 1.3%;
        font-size: 2rem;
    }
`;

const AccountButtons = styled(LinkButton)`
    height:40%;
    min-width: 0%;
    max-width: 30%;
    font-size: 1 rem;
    padding: 2% .5%;
    margin-right: 1.3%;
`;

const NavBar = (props) =>{

    return (
        <NavDiv>
            <LogoDiv><h3>LOGO</h3></LogoDiv>
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
                {/*  Uncomment when we can edit plant list
                    <LinkButton to='/myplants'>My Plants</LinkButton> 
                */}
            </LinksDiv>
            
        </NavDiv>
    )

}

export default NavBar;