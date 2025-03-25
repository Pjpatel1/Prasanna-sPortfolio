import React from 'react'
import "./style.css"
import security from "./Security+certificate.png"
export  const Certificates = () => {
  return (
    <div className='certificates'>
        <img src={security} className='certificatestyle'></img>
    </div>
  )
}
