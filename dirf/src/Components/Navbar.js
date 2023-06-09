import React from 'react'

const Navbar = () => {
  return (
    <header>
       
    <nav>
        <div class="nav_items">
            
            <span>MYCAR</span>
        </div>
        <div class="nav_items ">
            <ul class="sub_titles">
                <li> <a href="#" class="active">accueil</a> </li>
                <li> <a href="catalogue.html">catalogues</a> </li>
                <li> <a href="apropos.html">a propos</a> </li>
                <li> <a href="contact.html">contact</a> </li>
                
            </ul>
        </div>
    </nav>

    {/* <h1><span>Mycar</span> votre etablissement de vente de voiture TOYOTA</h1> */ }
</header>
  )
}

export default Navbar;