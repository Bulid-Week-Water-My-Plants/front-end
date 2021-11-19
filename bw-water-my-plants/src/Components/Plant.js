import React from 'react';
import styled from 'styled-components';
import backImg from '../images/gallery/fulls/10.jpg'

const ContainerDiv = styled.div `
  height: 20vh;
  width: 50%;
  position: relative;
  display: block;
  padding: 30px;
  font-size: 15px;
  margin-bottom: 15px;
  background-image: url(${backImg});
`
const MyPlantDiv = styled.div `
  font-family: 'Monsterrat', sans-serif;
  font-weight: 600;
  line-height: 0.5;

`
export default function Plant(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your plants details...</h3>
  }

  return (
    <ContainerDiv>
      <MyPlantDiv>
        <h2>Name: {details.name}</h2>
      </MyPlantDiv>

      <MyPlantDiv>
        <p>Species: {details.species}</p>
      </MyPlantDiv>

      <MyPlantDiv>
        <p>Water: {details.water}</p>
      </MyPlantDiv>
    </ContainerDiv>
  )
}