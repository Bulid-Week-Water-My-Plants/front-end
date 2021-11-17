import React from 'react';
import { useParams } from 'react-router-dom';

export default function Plant(props) {
  const { details } = props
  const { id } = useParams()

  if (!details) {
    return <h3>Working fetching your plants details...</h3>
  }

  return (
    <div className='plant container'>
      <h2>{details.name}</h2>
      <p>Species: {details.species}</p>
      <p>Water: {details.water}</p>
    </div>
  )
}