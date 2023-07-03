import React from 'react'
import Header from './Header'
import Pictures from '../data/Pictures'





function Restaurant() {
 
  return (
    <>
      <Header/>
      <h1 class="display-4 text-center">Dirf Restaurant</h1>
        <p class="lead text-center">
        Restaurant gastronomique étoilé au guide Michelin depuis 2002
        </p>
      <Pictures/>

    </>
    

  )
}

export default Restaurant