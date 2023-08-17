import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainTitle from '../components/MainTitle'


const SearchAuthors = () => {
    function handleChange(event) {
        const text =  event.target.value
        setSearchText(event.target.value)
        let filteredAuthors = text === "" ? [] : authors.filter((author) => author.name.toLowerCase().includes(text.toLowerCase()))
        setfilteredAuthorsNames(filteredAuthors)
        console.log("filteredAuthorsNames",filteredAuthorsNames)
      }
    
      const [authors,setAuthors] = useState([]);
      const [filteredAuthorsNames,setfilteredAuthorsNames] = useState([]);
      const [searchText,setSearchText] = useState("");
    
      useEffect(()=>{
        setAuthors([{id:423, name:"Wallace Stegner"},{id:276, name:"Miguel Delibes"},{id:342,name: "Kevin Dos Santos"}])
      },[])
      
      return (
        <>
        <MainTitle>Museo del libro</MainTitle>
        <div className="px-8 -mt-20">
          <div className="flex flex-col flex-1 h-screen justify-center">
            {/* Search Title */}
              <p className="text-5xl  text-center p-8">
              Buscar 
              </p>

            {/* Search Input box*/}
            <div className='flex flex-row items-center space-x-4 p-4 mb-0 m-12 border border-2  border-black rounded-full'>
              {/* Search Icon*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                {/* Search Input*/}
                <input type="text" className='  focus-visible:border-none flex flex-1 text-xl font-[calibri]'  placeholder='Busca Autores por nombre o Nro' onChange={handleChange} />
            </div>
            {/* Suggestion Box*/}
            {!!filteredAuthorsNames.length &&
          <div className="border border-black border-2 -mt-10 pt-14 rounded-b-3xl border-t-0 p-4 mx-12 text-center font-[calibri]" >
          
          {filteredAuthorsNames.map( author => {
                return <div key={author.id}  >
                      <Link to="/bio" className="p-1 text-2xl " >{author.id} {author.name} </Link> 
                  </div>
                
              })}
              
          </div>}
    
              
            
            
          </div>
        </div>
        </>
      );
    }

export default SearchAuthors