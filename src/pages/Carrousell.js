import React from 'react'
import MainTitle from '../components/MainTitle'
import img1 from '../assets/images/wallace.jpg'
import img2 from '../assets/images/miguel.jpg'
import QuotesCarrousel from '../components/QuotesCarrousel'
import { Link } from 'react-router-dom'

function Carrousell() {
  return (
    <Link to="search" className='flex flex-col'>
        <MainTitle className="" >Museo del libro</MainTitle>
        <div className=' p-44  py-20 '>
            <QuotesCarrousel/>
        </div>
        <p className=' text-center'>Toca la pantalla para buscar</p>
        
    </Link>
  )
}

export default Carrousell