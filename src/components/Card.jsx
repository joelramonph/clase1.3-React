import React from 'react'

const Card = ({objInfo}) => {



  return (
    <ul className={`list list${objInfo.number}`}>
    <h2 className='title-card'>{objInfo.title}</h2>
      <li className='list__item'>{objInfo.list[0]}</li>
      <li className='list__item'>{objInfo.list[1]}</li>
      <li className='list__item'>{objInfo.list[2]}</li>
      
    </ul>

  )
}

export default Card