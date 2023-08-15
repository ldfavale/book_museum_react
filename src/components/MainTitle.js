import React from 'react'

function MainTitle({children,...props}) {
    console.log(props.className)
  return (
    <header className={props.className}>
          <h1 className=" text-4xl text-center px-8 pt-8">
            {typeof children === "string" ?  children.toUpperCase() : ""}
          </h1>
    </header>
  )
}

export default MainTitle