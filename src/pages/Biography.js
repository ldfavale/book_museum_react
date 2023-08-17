import React from 'react'
import bioImg from '../assets/images/biografia_wallace.jpg'
import BackButton from '../components/BackButton'

function Biography() {
  return (
    <div>
      <img src={bioImg} alt="bioImg" />
      <BackButton className='w-16 absolute top-20 left-3' />
    </div>
  )
}

export default Biography