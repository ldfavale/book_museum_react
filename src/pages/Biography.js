import React from 'react'
import bioImg from '../assets/images/biografia_wallace.jpg'
import Header from '../components/Header'

function Biography() {
  return (
    <div>
      <Header showBackButton={true}/>
      <div className='flex justify-center'>
        <img className='w-[38rem]' src={bioImg} alt="bioImg" />
      </div>
    </div>
  )
}

export default Biography