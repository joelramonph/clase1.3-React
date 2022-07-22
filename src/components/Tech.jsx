import React from 'react'

const Tech = ({techInfo}) => {
  return (

    <ul className='list list4'>
    <h2 className='title-card'>{techInfo.title}</h2>
      <li className='list__item'>{techInfo.list[0]}</li>
      <li className='list__item'>{techInfo.list[1]}</li>
      <li className='list__item'>{techInfo.list[2]}</li>
    
    </ul>
  )
}

export default Tech