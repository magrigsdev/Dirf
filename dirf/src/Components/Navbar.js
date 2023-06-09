import React from 'react'

const Navbar = () => {
  return (
    
  
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
       
        <h1>Dirf<span>.</span>Restaurant</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#hero">restaurant</a></li>
          <li><a href="#about">chef</a></li>
          <li><a href="#menu">menus</a></li>
          <li><a href="#events">galerie</a></li>
          <li><a href="#chefs">emporter</a></li>
          <li><a href="#gallery">cadeau</a></li>
          <li><a href="#gallery">reservations - accès</a></li>

        </ul>
      </nav>
      

      
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
 

  )
}

export default Navbar;