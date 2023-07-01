import React from 'react'
import Navbar from './Navbar'
import "../assets/css/Header.css"


function Header() {
  return (
    <>
        <header class="container-fluid myheader">
            <Navbar/>
            <div class="mask">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white">
                  <h1 class="mb-3">Une cuisine proche du produit, inspirée par la nature et le terroir</h1>
                  <h4 class="mb-3">Subheading</h4>
                  <a class="btn btn-outline-success btn-lg" href="#!" role="button"
                  >Call to action</a
                  >
                </div>
              </div>
            </div>
            
        </header>
       
    </>
  )
}

export default Header