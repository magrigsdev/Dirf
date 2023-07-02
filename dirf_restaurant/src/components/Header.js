import React from 'react'
import Navbar from './Navbar'
import LE_GOURMET_DE_SEZE  from "../assets/video/LE_GOURMET_DE_SEZE.mp4";
import MyHeader from "../assets/css/MyHeader.css";

function Header() {
  return (
   
    <>
      <Navbar/>
      <div className='container-fluid'>
            <div className='row w-auto myvideo'>       
               <video src={LE_GOURMET_DE_SEZE}  autoPlay loop muted/>
            </div>

            <div className='row w-auto mytext text-left p-2 text-white'> 
              <div className='col-*-12 align-self-start'>
              <h1 class="h1">Dirf Restaurant</h1>
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

export default Header