import React from 'react'
import MainTitle from '../components/MainTitle'
import img1 from '../assets/images/wallace.jpg'
import img2 from '../assets/images/miguel.jpg'
import QuotesCarrousel from '../components/QuotesCarrousel'

function Carrousell() {
  return (
    <div className='flex flex-col'>
        <MainTitle className="" >Museo del libro</MainTitle>
        <div className=' p-44  pt-20 '>
            <QuotesCarrousel/>
        </div>
        {/* <img src={img1} alt="bioImg" />
        <img src={img2} alt="bioImg" /> */}
    </div>
  )
}

export default Carrousell