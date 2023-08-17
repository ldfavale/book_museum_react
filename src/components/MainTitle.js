import React from 'react'

function MainTitle({children,...props}) {
  return (
    <header className={props.className}>
          <h1 className="">
            {typeof children === "string" ?  children.toUpperCase() : ""}
          </h1>
    </header>
  )
}

export default MainTitle