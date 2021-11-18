import React from 'react';
import styled from 'styled-components';
import myImage from '../images/gallery/thumbs/02.jpg'

const ContainerForm = styled.div`
    height: 90vh;
    display:flex;
    align-items: center;
    justify-content:center;
    background-image: url(${myImage})
`
const Form = styled.form `
    display:block;
    position: relative;

    &:after{
        content: '';
        display:block;
        position:absolute;
        top: -8px;
        right: -8px;
        left: -8px;
        bottom: -8px;
        z-index:1;
        background-image: linear-gradient(to top right, #BAE8D2, #021F15);
    }
`
const FormDiv = styled.div `
    position:relative;
    display:block;
    background-color:white;
    padding: 30px;
    font-size: 35px;
    font-weight: 650;
    z-index:2;
`
const PlantH2 = styled.h2`
    color: #7D8C8C;
    margin-bottom:30px;
    font-size:50px;
    font-weight:650;
`
const LabelDiv = styled.div`
    display: block;
    width: 500px;
    margin-bottom: 20px;
`

const Labels = styled.label`
    display:block;
    color: #7D8C8C;
    font-size: 35px;
    margin-bottom: 5px;
    transition: 0.5s;

    &:focus-within{
        color: darkgreen;
    }
`

const PlantInput = styled.input`
    font-family:Arial, Helvetica, sans-serif;
    display:block;
    width:100%;
    padding: 15px 15px;
    background-color: purple;
    border-radius: 50px;
    transition: 0.5s;
    appearance: none;
    background: none;
    outline: none;
    &:focus{
        box-shadow: 0px 0px 3px rgba(0,0,0,1);
    } 
`
const PlantCheck = styled.input`
    display:block;
    width:100%;
    padding: 10px 15px;
    font-size: 15px;
    background-color: white;
    border-radius: 8px;
    transition: 0.5s;
    &:focus{
        box-shadow: 0px 0px 3px rgba(0,0,0,1);
    } 
`
const Button = styled.button`
    position:relative;
    display:inline-block;
    padding: 10px, 15px;
    height : 50px;
    border-radius: 8px;
    background-size: 200%;
    background-position: 0%;
    transition: 0.5s;
    color:white;
    cursor: pointer;
    font-weight: 650;
    background-image: linear-gradient(to left, #85C9E6, #2B5708);
    &:hover{
        background-position: 100% 0%;
    }
`
const ButtonDiv = styled.div`
    padding-bottom: 10px;
`

export default function PlantForm(props){
    const {values, change, submit, errors} = props 

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <ContainerForm>
            <Form onSubmit={onSubmit}>
                <FormDiv>
                    <div>
                        <PlantH2>Input Your Plants</PlantH2>
                    </div>
                    {/* Text Inputs */}
                    <LabelDiv>
                        <Labels> Plant Name: 
                            <PlantInput id='name-input'
                                value={values.name}
                                name='name'
                                type='text'
                                onChange={onChange}
                            />
                        </Labels>
                    </LabelDiv>
                    <div>
                        <Labels> Plant Species:
                            <PlantInput id='species-input'
                                value={values.species}
                                name='species'
                                type='text'
                                onChange={onChange}
                            />
                        </Labels>
                    </div>
                    {/* CheckBox - Does the plant require strict vs not strict watering schedule. i.e. cactus (doesnt need much water) vs other normal plant */}
                    <div>
                        <Labels> Strict Watering Schedule? 
                            <PlantCheck 
                                type='checkbox'
                                name='water'
                                onChange={onChange}
                                checked={values.water}
                            />
                        </Labels>
                    </div>
                    <ButtonDiv>
                        <Button onSubmit={submit}>Submit Plant!</Button>
                    </ButtonDiv>
                </FormDiv>
            </Form>
        </ContainerForm>
    )
}