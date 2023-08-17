import React from 'react'

function QuotesCarouselItem({...props}) {
  return (
    <>
        <img src={props.img} alt="author image" />
        <h1 className="mt-6 text-2xl ">{props.title}</h1>
        <p className=" text-red-700 mt-10 text-xl text-justify font-[calibri] red-text calibri ">{props.quote}</p>
    </>
  )
}

export default QuotesCarouselItem