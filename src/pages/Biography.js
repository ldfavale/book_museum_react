import React from 'react'
import bioImg from '../assets/images/biografia_wallace.jpg'
import Header from '../components/Header'

function Biography() {
  return (
    <div>
      <Header showBackButton={true}/>
      <img src={bioImg} alt="bioImg" />
    </div>
  )
}

export default Biography