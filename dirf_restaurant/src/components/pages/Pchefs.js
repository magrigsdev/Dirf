import React from 'react'
import Mynavbar from '../Mynavbar'
import fonds from "../../assets/pictures/312472.jpg";

function Pchefs() {
  
  return (
    <>
      <Mynavbar/>

      <div className='container-fluid'>
            <div className='row w-auto myvideo'>       
               <img  src= {fonds} className='img-fluid img-thumbnail' alt='...'/>
            </div>

            <div className='row w-auto mytext text-left p-2 text-white'> 
              <div className='col-*-12 align-self-start'>
              <h1 class="h1">Chefs</h1>
              </div>
              <div className='col-*-12 align-self-start'>
                <h1 class="h4 text-gray-500 ">Une cuisine proche du produit, inspirée par la nature et le terroir</h1>
              </div>       
              <div className='col align-self-start'>
              <button type="button" class="btn btn-danger">Voir le menu</button>
              </div> 
            </div>
      </div>

    </>
  )
}

export default Pchefs