import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/images/wallace.jpg' 
import img2 from '../assets/images/miguel.jpg'
import QuotesCarouselItem from './QuotesCarouselItem';

function QuotesCarrousel({...props}) {
  const authors = [
    {
      img: img1,
      title: "WALLACE STEGNER", 
      quote: "Sientete orgulloso de cada cicatriz en tu corazon, tienen el valor de las lecciones que da la vida"
    },
    {
      img: img2,
      title: "MIGUEL DELIBES", 
      quote:"El hombre de hoy usa y abusa de la naturaleza, como si hubiera de ser el ultimo inquilino de este desgraciado planta"
    }
  ]
  return (
    <Carousel  
      className={props.className} 
      autoPlay={true} 
      infiniteLoop={true} 
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
        {authors.length && 
          authors.map((author)=>{
            return <QuotesCarouselItem img={author.img} title={author.title} quote={author.quote} />
          })
        }
    </Carousel>
  )
}

export default QuotesCarrousel