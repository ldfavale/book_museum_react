import React from 'react'
import MainTitle from './MainTitle'
import BackButton from './BackButton'

function Header({...props}) {
  return (
    <div>
        <MainTitle className="text-3xl text-center p-8  font-semibold" >Museo del libro</MainTitle>
        {props.showBackButton && <BackButton className='w-11 absolute top-7 left-7' /> }
    </div>
  )
}

export default Header