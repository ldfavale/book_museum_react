import React from 'react'
import QuotesCarrousel from '../components/QuotesCarrousel'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Carrousell() {
  return (
    <Link to="search" className='flex flex-col'>
      <Header showBackButton={false} />
        <div className='flex flex-row justify-center pt-16'>
          <div className='w-[22rem]'>
              <QuotesCarrousel/>
          </div>
        </div>
        <p className='text-center text-xs pt-16'>Toca la pantalla para buscar</p>
        
    </Link>
  )
}

export default Carrousell