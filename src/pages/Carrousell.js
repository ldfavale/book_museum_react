import React from 'react'
import MainTitle from '../components/MainTitle'
import img1 from '../assets/images/wallace.jpg'
import img2 from '../assets/images/miguel.jpg'
import QuotesCarrousel from '../components/QuotesCarrousel'
import { Link } from 'react-router-dom'

function Carrousell() {
  return (
    <Link to="search" className='flex flex-col'>
        <MainTitle className="text-3xl text-center px-8 pt-8" >Museo del libro</MainTitle>
        <div className='flex flex-row justify-center pt-16'>
          <div className='w-[22rem]'>
              <QuotesCarrousel/>
          </div>
        </div>
        <p className='text-center pt-28'>Toca la pantalla para buscar</p>
        
    </Link>
  )
}

export default Carrousell