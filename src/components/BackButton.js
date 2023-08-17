import React from 'react'
import {Route, Link, Routes, useNavigate} from 'react-router-dom';
import backImg from '../assets/images/back.svg'

function BackButton({...props}) {
    const navigate = useNavigate();
  return (
    <div>
        <button 
            onClick={() => { navigate(-1) }}
            className={props.className}
            >
            <img src={backImg} alt="bioImg" />
        </button>
    </div>
  )
}

export default BackButton