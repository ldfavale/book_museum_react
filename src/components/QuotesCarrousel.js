import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/images/wallace.jpg' 
import img2 from '../assets/images/miguel.jpg'

function QuotesCarrousel({...props}) {
  return (
    <Carousel  className={props.className} autoPlay={true} infiniteLoop={true} renderThumbs={()=>{}}>
        <div className=''>
          <img src={img1} alt="bioImg" />
           <h1 className="mt-6  text-4xl ">WALLACE STEGNER</h1>
           <p className=" text-red-700 mt-10 text-3xl text-justify font-[calibri]">"Sientete orgulloso de cada cicatriz en tu corazon, tienen el valor de las lecciones que da la vida"</p>
        </div>
        <div>
          <img src={img2} alt="bioImg" />
          <h1 className="mt-6 text-4xl ">MIGUEL DELIBES</h1>

           <p className=" text-red-700 mt-10 text-3xl text-justify font-[calibri] ">"El hombre de hoy usa y abusa de la naturaleza, como si hubiera de ser el ultimo inquilino de este desgraciado planta"</p>
        </div>
    </Carousel>
  )
}

export default QuotesCarrousel